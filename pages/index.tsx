import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import IssueList from "./components/IssueList";

import { getIssues } from "./queries/getIssues";

export default function Home() {
  const limit = 10;

  const [pageNum, setPageNum] = useState(0);

  const { isLoading, error, data } = useQuery({
    queryKey: [pageNum, limit],
    queryFn: () => getIssues(pageNum, limit),
  });

  if (!isLoading) {
    console.log(data);
  }

  const disableNextButton = data && pageNum === data.totalPages - 1; // pages start at 0
  const disablePrevButton = pageNum === 0;

  return (
    <>
      <Head>
        <title>GotIssues? Git Issue Tracker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>GotIssues - Github Issue Tracker</h1>
        {!isLoading && <IssueList issues={data!.issues} />}

        <button
          type="button"
          onClick={() => setPageNum(pageNum - 1)}
          disabled={disablePrevButton}
        >
          Prev
        </button>

        <button
          type="button"
          onClick={() => setPageNum(pageNum + 1)}
          disabled={disableNextButton}
        >
          Next
        </button>
      </main>
    </>
  );
}
