import styles from "@/styles/DifficultyTag.module.css";

interface Props {
  difficultyLevel: "advanced" | "beginner" | "intermediate" | "none";
}

export default function DifficultyTag({ difficultyLevel }: Props) {
  if (
    difficultyLevel !== "advanced" &&
    difficultyLevel !== "beginner" &&
    difficultyLevel !== "intermediate"
  ) {
    difficultyLevel = "none";
  }

  let classNames = `${styles.difficultyTag} ${styles[difficultyLevel]}`;
  return (
    <span className={classNames} title={difficultyLevel}>
      {difficultyLevel.charAt(0).toUpperCase()}
    </span>
  );
}
