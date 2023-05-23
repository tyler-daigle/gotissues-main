// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { IssueType, IssueListResponseType } from "../../types/types";
import { prisma } from "../../util/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IssueListResponseType | string>
) {
  if (req.method !== "GET") {
    res.status(404).send("<h1>404 - Not Found</h1>");
  }
  const pageSize = 10;
  let totalIssues = 0;
  let totalPages = 0;
  try {
    const { page, limit, difficulty, language } = req.query;

    // check the params that are passed
    let pageNum = page && typeof page === "string" ? Number.parseInt(page) : 0;
    let resultsLimit =
      limit && typeof limit === "string" ? Number.parseInt(limit) : 10;

    console.log(`Getting page ${pageNum}`);
    console.log(`Diff: ${difficulty} language: ${language}`);

    const issuesArray: IssueType[] = [];
    // const issueItem = await prisma.issues.findFirstOrThrow();
    let issuesItems;

    // many filters...
    if (language === "all" && difficulty === "all") {
      // no filtering needed
      issuesItems = await prisma.issues.findMany({
        skip: pageNum * pageSize,
        take: resultsLimit,
      });

      totalIssues = await prisma.issues.count();
    } else if (language !== "all" && difficulty === "all") {
      // filter by language only
      issuesItems = await prisma.issues.findMany({
        skip: pageNum * pageSize,
        take: resultsLimit,
        where: {
          techUsed: {
            contains: language
              ? (language as string).toLowerCase()
              : "javascript",
          },
        },
      });

      totalIssues = await prisma.issues.count({
        where: {
          techUsed: {
            contains: language
              ? (language as string).toLowerCase()
              : "javascript",
          },
        },
      });
    } else if (language === "all" && difficulty !== "all") {
      // filter by difficulty only
      issuesItems = await prisma.issues.findMany({
        skip: pageNum * pageSize,
        take: resultsLimit,
        where: {
          difficultyLevel: difficulty as string,
        },
      });

      totalIssues = await prisma.issues.count({
        where: {
          difficultyLevel: difficulty as string,
        },
      });
    } else {
      // filter by both
      issuesItems = await prisma.issues.findMany({
        skip: pageNum * pageSize,
        take: resultsLimit,
        where: {
          techUsed: {
            contains: language
              ? (language as string).toLowerCase()
              : "javascript",
          },
          difficultyLevel: difficulty as string,
        },
      });

      totalIssues = await prisma.issues.count({
        where: {
          techUsed: {
            contains: language
              ? (language as string).toLowerCase()
              : "javascript",
          },
          difficultyLevel: difficulty as string,
        },
      });
    }

    totalPages = Math.ceil(totalIssues / pageSize);

    issuesArray.push(...issuesItems);
    console.log("Issues Endpoint hit...");

    res.status(200).json({
      issues: issuesArray,
      count: issuesArray.length,
      totalPages,
      totalIssues,
    });
  } catch (error: any) {
    console.error(error.message);
    res.status(200).json({ issues: [], count: 0, totalPages, totalIssues }); //TODO: what is the proper way to handle a bad request?
  }
}
