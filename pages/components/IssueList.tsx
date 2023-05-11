import { IssueType } from "../types/types";

interface Props {
  issues: IssueType[];
}

export default function IssueList({ issues }: Props) {
  return (
    <div>
      <h2>List of issues</h2>
      {issues.map((issue) => (
        <IssueContainer key={issue.id} issue={issue} />
      ))}
    </div>
  );
}

function IssueContainer({ issue }: { issue: IssueType }) {
  return (
    <div>
      <h3>{issue.issueTitle}</h3>
      <p>{issue.issueDescription}</p>
    </div>
  );
}
