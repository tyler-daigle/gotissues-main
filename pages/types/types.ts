export interface IssueType {
  id: string;
  issueTitle: string;
  techUsed: string; // csv of strings
  difficultyLevel: "beginner" | "intermediate" | "advanced";
  issueNumber: number;
  dateCreated: string;
  issueDescription: string;
  issueLink: string;
  repoLink: string;
  repoName: string;
}

export interface ProjectType {
  id: string;
  projectName: string; //this is just the name of the github repo
  issues: IssueType[]; // an array of all the issues.
}

export interface IssueListResponseType {
  issues: IssueType[];
  count: number;
  totalPages: number;
}
