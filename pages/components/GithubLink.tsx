import styles from "@/styles/GithubLink.module.css";

export default function GithubLink({ url }: { url: string }) {
  return (
    <a
      className={styles.githubLink}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      Github Link
    </a>
  );
}
