// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { IssueType, IssueListResponseType } from "../types/types";
import { prisma } from "../util/prisma";
import { z } from "zod";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(404).send("<h1>404 - Not Found</h1>");
  }

  // need a token from github to make sure the user adding the issue is the same as the
  // owner of the repo.

  const issueSchema = z.object({
    issueTitle: z.string(),
    techUsed: z.string(),
    difficultyLevel: z.string(),
    issueNumber: z.number(),
    dateCreated: z.string(),
    issueDescription: z.string(),
    issueLink: z.string(),
    repoLink: z.string(),
    repoName: z.string(),
  });

  try {
    issueSchema.parse(req.body);

    const issue = await prisma.issues.create({
      data: {
        ...req.body,
        dateCreated: new Date(req.body.dateCreated),
      },
    });
    console.log(issue);
    res
      .status(200)
      .json({ message: `${req.body.issue_title} added to the database` });
  } catch (error: any) {
    console.error(error.message);
    res.status(200).send("Error with request body"); //TODO: what is the proper way to handle a bad request?
  }
}
