import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useQuery } from "@tanstack/react-query";
import { Issue } from "./types/types";
import { useState } from "react";

const serverHost = "http://localhost";
const port = 3000;
const endpoint = "api/issues";

async function getIssues(
  pageNum: number = 0,
  limit: number = 0
): Promise<Issue[]> {
  console.log("Getting Page: ", pageNum);

  let issues: Issue[] = [];
  try {
    const url = `${serverHost}:${port}/${endpoint}?page=${pageNum}&limit=${limit}`;
    const data = await fetch(url);
    issues = await data.json();

    if (!Array.isArray(issues)) {
      throw new Error("Returned Issue JSON Data is not an array.");
    }
  } catch (error: any) {
    console.log(error.message);
  }
  return issues;
}

export default function Home() {
  const [pageNum, setPageNum] = useState(0);
  const limit = 10;
  const { isLoading, error, data } = useQuery({
    queryKey: [pageNum, limit],
    queryFn: () => getIssues(pageNum, limit),
  });

  if (!isLoading) {
    console.log(data);
  }

  return (
    <>
      <Head>
        <title>GotIssues? Git Issue Tracker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <button type="button" onClick={() => setPageNum(pageNum + 1)}>
          Next
        </button>
      </main>
    </>
  );
}
