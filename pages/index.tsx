import Head from "next/head";
import styles from "@/styles/Home.module.css";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getIssues } from "../queries/getIssues";

/* Components */
import GotIssuesLogo from "../components/GotIssuesLogo";
import IssueList from "../components/IssueList";
import Button from "../components/Button";
import SearchForm from "../components/SearchForm";
import ResultsStats from "../components/ResultsStats";
import { IssueFilter } from "../types/types";

export default function Home() {
  const limit = 10;

  const [pageNum, setPageNum] = useState(0);
  const [filter, setFilter] = useState<IssueFilter>({});
  const { isLoading, error, data } = useQuery({
    queryKey: [pageNum, limit, filter],
    queryFn: () =>
      getIssues(pageNum, limit, filter.language, filter.difficultyLevel),
  });

  if (!isLoading) {
    console.log(data);
  }

  const disableNextButton = data && pageNum === data.totalPages - 1; // pages start at 0
  const disablePrevButton = pageNum === 0;

  const filterUpdated = (currFilter: IssueFilter) => {
    setFilter(currFilter);
    setPageNum(0);
  };

  return (
    <>
      <Head>
        <title>GotIssues? Git Issue Tracker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <GotIssuesLogo />
        <div className={styles.mainContainer}>
          <SearchForm onFilterChange={filterUpdated} />
          {!isLoading && (
            <ResultsStats
              totalPages={data!.totalPages}
              numberResults={data!.totalIssues}
              currPage={pageNum}
            />
          )}
          {!isLoading && <IssueList issues={data!.issues} />}

          <div style={{ display: "flex", gap: "1rem", marginTop: " 1rem" }}>
            <Button
              onClick={() => setPageNum(pageNum - 1)}
              disabled={disablePrevButton}
            >
              Prev
            </Button>

            <Button
              onClick={() => setPageNum(pageNum + 1)}
              disabled={disableNextButton}
            >
              Next
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
