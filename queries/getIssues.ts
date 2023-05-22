import { IssueType, IssueListResponseType } from "../types/types";

export async function getIssues(
  pageNum: number = 0,
  limit: number = 0,
  language: string = "all",
  difficultyLevel: string = "all"
): Promise<IssueListResponseType> {
  const serverHost = "http://localhost";
  const port = 3000;
  const endpoint = "api/issues";

  let issuesResponse: IssueListResponseType = {
    issues: [],
    count: 0,
    totalPages: 0,
    totalIssues: 0,
  };

  try {
    //
    // const url = `${serverHost}:${port}/${endpoint}?page=${pageNum}&limit=${limit}&language=${language}&difficulty=${difficultyLevel}`;

    const url = `/api/issues?page=${pageNum}&limit=${limit}&language=${language}&difficulty=${difficultyLevel}`;

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
