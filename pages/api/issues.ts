// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { Issue } from '../types/types';
import data from "../data/issue_data.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Issue[]>
) {
  const {page , limit} = req.query;

  const pageSize = 10;

  let pageNum = page && !Array.isArray(page) ? Number.parseInt(page) : 0;
  let resultsLimit = limit && !Array.isArray(limit) ? Number.parseInt(limit) : 10;  

  const issues: Issue[] = data;
  res.status(200).json(issues.slice(pageNum * pageSize, pageNum * pageSize + resultsLimit));
}
