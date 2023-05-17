// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { IssueType, IssueListResponseType } from "../types/types";
import { prisma } from "../util/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IssueListResponseType | string>
) {
  if (req.method !== "GET") {
    res.status(404).send("<h1>404 - Not Found</h1>");
  }
  try {
    const { page, limit } = req.query;

    const pageSize = 10;

    // check the params that are passed
    let pageNum = page && typeof page === "string" ? Number.parseInt(page) : 0;
    let resultsLimit =
      limit && typeof limit === "string" ? Number.parseInt(limit) : 10;

    const issuesArray: IssueType[] = [];
    // const issueItem = await prisma.issues.findFirstOrThrow();
    const issuesItems = await prisma.issues.findMany({ take: resultsLimit });
    issuesArray.push(...issuesItems);
    console.log("Issues Endpoint hit...");

    res
      .status(200)
      .json({ issues: issuesArray, count: issuesArray.length, totalPages: 2 });
  } catch (error: any) {
    console.error(error.message);
    res.status(200).json({ issues: [], count: 0, totalPages: 0 }); //TODO: what is the proper way to handle a bad request?
  }
}
