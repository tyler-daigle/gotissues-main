import styles from "@/styles/GotIssuesLogo.module.css";
import Image from "next/image";

export default function GotIssuesLogo() {
  return (
    <div className={styles.mainLogoContainer}>
      <Image
        src="/gotissues-logo.png"
        alt="Got Issues Logo"
        width={100}
        height={100}
        className={styles.mainLogoImage}
      />
      <div className={styles.mainLogo}>
        <h1>
          <span className={styles.logoLeftSide}>Got</span>
          <span className={styles.logoRightSide}>Issues?</span>
        </h1>
        <p className={styles.logoTagLine}>
          Help solve other people&apos;s Github issues.
        </p>
      </div>
    </div>
  );
}
