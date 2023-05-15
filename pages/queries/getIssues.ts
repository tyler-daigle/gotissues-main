import { IssueType, IssueListResponseType } from "../types/types";

export async function getIssues(
  pageNum: number = 0,
  limit: number = 0
): Promise<IssueListResponseType> {
  const serverHost = "http://localhost";
  const port = 3000;
  const endpoint = "api/issues";

  let issuesResponse: IssueListResponseType = {
    issues: [],
    count: 0,
    totalPages: 0,
  };

  try {
    const url = `${serverHost}:${port}/${endpoint}?page=${pageNum}&limit=${limit}`;
    const data = await fetch(url);
    issuesResponse = await data.json();

    if (!Array.isArray(issuesResponse.issues)) {
      throw new Error("Returned Issue JSON Data is not an array.");
    }
  } catch (error: any) {
    console.log(error.message);
  }
  return issuesResponse;
}