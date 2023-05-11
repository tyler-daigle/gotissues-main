import styles from "@/styles/DifficultyTag.module.css";

interface Props {
  difficultyLevel: "advanced" | "beginner" | "intermediate";
}

export default function DifficultyTag({ difficultyLevel }: Props) {
  let classNames = `${styles.difficultyTag} ${styles[difficultyLevel]}`;
  return (
    <span className={classNames} title={difficultyLevel}>
      {difficultyLevel.charAt(0).toUpperCase()}
    </span>
  );
}
