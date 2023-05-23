import { IssueType } from "../types/types";
import styles from "@/styles/IssueItem.module.css";
import DifficultyTag from "./DifficultyTag";
import GithubLink from "./GithubLink";

export function IssueItem({ issue }: { issue: IssueType }) {
  let description = issue.issueDescription;
  const maxDescLength = 700;

  if (description.length > maxDescLength) {
    description = description.substring(0, maxDescLength) + "...";
  }

  return (
    <div className={styles.issueItem}>
      <h2 className={styles.repoName}>{issue.repoName}</h2>
      <ul className={styles.techUsedList}>
        {issue.techUsed.split(",").map((tech, index) => (
          <li key={tech + index} className={styles.techItem}>
            {tech}
          </li>
        ))}
      </ul>

      <div className={styles.issueStatsContainer}>
        <DifficultyTag difficultyLevel={issue.difficultyLevel} />
        <span className={styles.issueNumber}>Issue #{issue.issueNumber}</span>
        <h3 className={styles.issueTitle}>{issue.issueTitle}</h3>
      </div>

      <h4 className={styles.descriptionHeader}>Description</h4>
      <p className={styles.issueDescription}>{description}</p>
      <GithubLink url={issue.issueLink} />
    </div>
  );
}
