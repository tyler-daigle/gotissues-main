import { IssueType } from "../types/types";
import styles from "@/styles/IssueList.module.css";
import { IssueItem } from "./IssueItem";

interface Props {
  issues: IssueType[];
}

export default function IssueList({ issues }: Props) {
  return (
    <div className={styles.issueListContainer}>
      <ul className={styles.issueList}>
        {issues.map((issue) => (
          <li>
            <IssueItem key={issue.issueId} issue={issue} />
          </li>
        ))}
      </ul>
    </div>
  );
}
