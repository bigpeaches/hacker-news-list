import Head from "next/head";
import { useEffect, useState } from "react";

import styles from "@/styles/Home.module.css";

import HackerNewsList from "@/components/HackerNewsList";
import Spinner from "@/components/Spinner";
import { HackerNewsItem } from "@/constants/types";
import { getHackerNewsList } from "@/api/api";

export default function Home() {
  const [newslist, setNewsList] = useState<HackerNewsItem[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const getNewsList = async () => {
    setLoading(true);
    const list = await getHackerNewsList();
    setNewsList(list);
    setLoading(false);
  };

  useEffect(() => {
    getNewsList();
  }, []);

  return (
    <>
      <Head>
        <title>Hacker News List</title>
      </Head>
      <main className={styles.main}>
        <h1 className="text-3xl font-bold text-center">Hacker News List</h1>
        {isLoading && <Spinner />}
        <HackerNewsList newslist={newslist} isLoading={isLoading} />
      </main>
    </>
  );
}
