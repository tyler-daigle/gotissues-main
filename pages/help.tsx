import Head from "next/head";

import GotIssuesLogo from "@/components/GotIssuesLogo";
import styles from "@/styles/Help.module.css";
import Link from "next/link";

export default function HelpPage() {
  return (
    <>
      <Head>
        <title>GotIssues? Git Issue Tracker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <GotIssuesLogo />
        <div className={styles.helpContainer}>
          <h1>
            About <span className={styles.appName}>Got Issues</span> And How It
            Works.
          </h1>

          <p>
            Got Issues was made to help people find open source projects to
            contribute to. The website works by creating a{" "}
            <strong>filterable</strong> list of <strong>Github Issues</strong>.
          </p>

          <p>
            It was created to try to make it as easy as possible to add your
            issue to the website by using Github workflows and actions. It is
            possible to label your project with a difficulty level:{" "}
            <span className={styles.beginner}>Beginner</span>,{" "}
            <span className={styles.intermediate}>Intermediate</span> or
            <span className={styles.advanced}> Advanced</span>.
          </p>

          <h2>Step By Step Instructions</h2>
          <ol className={styles.instructionList}>
            <li>
              Grab the{" "}
              <a
                href="https://gist.github.com/tyler-daigle/8095fe4a684ee9750e1386ae9fc7562a"
                target="_blank"
                rel="noopener,noreferrer"
              >
                got-issues.yml
              </a>{" "}
              file.
            </li>
            <li>
              Create a new directory in the root of your repo called
              .github/workflows:
              <div className={styles.command}>$ mkdir -p .github/workflows</div>
            </li>
            <li>
              Place the got-issues.yml file in the{" "}
              <strong>.github/workflows</strong> directory.
            </li>
            <li>Commit your changes and push your changes to Github.</li>

            <li>
              Create an issue and label it with the{" "}
              <strong>&quot;Help Wanted&quot;</strong> label and that is it! You
              can check the status of the Action in the <strong>Actions</strong>{" "}
              tab on Github to see it run.
            </li>
          </ol>

          <h2>Optional Step - Labeling The Difficulty Level Of Your Issue</h2>

          <p>
            You can create three custom labels with the names: advanced,
            intermediate, and beginner. If you then add these labels to your
            issue it will be displayed on the site and enable users to filter by
            difficulty level.
          </p>

          <h2>Disclaimer</h2>
          <p>
            This site was created for the <strong>dev.to 2023 Hackathon</strong>
            . You can view the repo at{" "}
            <a href="https://github.com/tyler-daigle/gotissues-main">Github</a>.
            It still has some work to be done. The filters don&apos;t work
            perfectly yet and there is no sorting yet and I am sure there are
            other bugs.
          </p>
          <Link className={styles.goBackLink} href="/">
            Go Back To The Issues
          </Link>
        </div>
      </main>
    </>
  );
}
