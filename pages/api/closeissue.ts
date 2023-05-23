import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../util/prisma";
import { z } from "zod";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(404).send("<h1>404 - Not Found</h1>");
  }

  const issueId = z.string();
  const id = req.body.id;
  try {
    issueId.parse(id);

    console.log(`Closing issue with id ${id}`);
    const deletedIssue = await prisma.issues.deleteMany({
      where: {
        issueId: id,
      },
    });

    res.status(200).send({ message: `Issue ${id} closed.` });
  } catch (error: any) {
    res.status(404).send({
      message: `Unable to remove issue ${id} from the database: ${error.message}`,
    });
  }
}
