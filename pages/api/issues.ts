// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { Issue } from '../types/types';
import data from "../data/issue_data.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Issue[]>
) {
  const {page , limit} = req.query;
  let pageNum;
  let resultsLimit;  
  
  if(page && !Array.isArray(page)) {
    pageNum = Number.parseInt(page);
  } else {
    pageNum = 0;
  }

  if(limit && !Array.isArray(limit)) {
    resultsLimit = Number.parseInt(limit);
  }else {
    resultsLimit = 10;
  }

  
  if(pageNum < 0 || resultsLimit <= 0) {
    pageNum = 0;
    resultsLimit = 10;
  }

  console.log(pageNum, resultsLimit);
  const issues: Issue[] = data;
  res.status(200).json(issues.slice(pageNum, resultsLimit));
}
