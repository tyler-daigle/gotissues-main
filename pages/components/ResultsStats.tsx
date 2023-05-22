import styles from "@/styles/ResultsStats.module.css";

interface Props {
  numberResults: number;
  currPage: number;
  totalPages: number;
}

export default function ResultsStats({
  numberResults,
  currPage,
  totalPages,
}: Props) {
  return (
    <div className={styles.results}>
      <div>
        <span className={styles.numberIssues}>{numberResults} issues </span>
      </div>
      <div>
        Page <span className={styles.pageNum}>{currPage + 1}</span> of{" "}
        <span className={styles.pageNum}>{totalPages}</span>
      </div>
    </div>
  );
}
