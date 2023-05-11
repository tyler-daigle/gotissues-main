export interface IssueType {
  id: string;
  issueTitle: string;
  techUsed: string[];
  difficultyLevel: string; // "beginner" | "intermediate" | "advanced";
  issueNumber: number;
  dateCreated: string;
  issueDescription: string;
  issueLink: string;
  repoLink: string;
}

export interface IssueListResponseType {
  issues: IssueType[];
  count: number;
  totalPages: number;
}
