export interface Issue {
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