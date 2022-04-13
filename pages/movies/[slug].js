import Head from "next/head";
import styles from "../../styles/Home.module.css";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function Movie({ movie }) {
  return (
    <div>
      <Head>
        <title>{movie.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>{movie.title}</h2>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.query;

  const movie = await prisma.movie.findFirst({
    where: {
      slug: slug,
    },
  });

  return {
    props: {
      movie,
    },
  };
}
