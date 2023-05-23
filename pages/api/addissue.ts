// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { IssueType, IssueListResponseType } from "../../types/types";
import { prisma } from "../../util/prisma";
import { z } from "zod";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(404).send("<h1>404 - Not Found</h1>");
  }

  // TODO: need a token from github to make sure the user adding the issue is the same as the
  // owner of the repo.

  const issueSchema = z.object({
    issueId: z.string(),
    issueTitle: z.string(),
    techUsed: z.string(),
    difficultyLevel: z.string(),
    issueNumber: z.number(),
    dateCreated: z.date(),
    issueDescription: z.string(),
    issueLink: z.string(),
    repoLink: z.string(),
    repoName: z.string(),
  });

  try {
    const issueToAdd = {
      issueId: req.body.issueId,
      issueTitle: req.body.issueTitle,
      techUsed: req.body.techUsed,
      difficultyLevel: req.body.difficultyLevel,
      issueNumber: parseInt(req.body.issueNumber),
      dateCreated: new Date(req.body.dateCreated),
      issueDescription: req.body.issueDescription,
      issueLink: req.body.issueLink,
      repoLink: req.body.repoLink,
      repoName: req.body.repoName,
    };

    issueSchema.parse(issueToAdd);

    const issue = await prisma.issues.create({
      data: issueToAdd,
    });

    console.log(issue);
    res
      .status(200)
      .json({ message: `${issue.issueTitle} added to the database` });
  } catch (error: any) {
    console.error(error.message);
    res.status(200).send("Error with request body"); //TODO: what is the proper way to handle a bad request?
  }
}
