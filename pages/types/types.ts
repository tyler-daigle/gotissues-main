export interface IssueType {
  id: string;
  issueTitle: string;
  techUsed: string[];
  difficultyLevel: "beginner" | "intermediate" | "advanced";
  issueNumber: number;
  dateCreated: string;
  issueDescription: string;
  issueLink: string;
  repoLink: string;
  repoName?: string;
  // TODO: add the repo name into the API
}

export interface IssueListResponseType {
  issues: IssueType[];
  count: number;
  totalPages: number;
}
