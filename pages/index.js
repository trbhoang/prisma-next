import Head from "next/head";
import styles from "../styles/Home.module.css";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul className={styles.movielist}>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const movies = await prisma.movie.findMany();

  return {
    props: {
      data: movies,
    },
  };
}
