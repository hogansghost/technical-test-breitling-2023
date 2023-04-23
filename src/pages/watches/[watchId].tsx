import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

export const Watch: NextPage<{ watch: any }> = ({ watch }) => {
  return (
    <>
      <Head>
        <title>Watch</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Watch {watch?.watchId}</h1>
        <Link href="/">Home</Link>
        <Link href="watches">Watches</Link>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Empty paths as there are thousands of products so we'll generate on first access.
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const watchId = params?.watchId;

  return {
    props: {
      watch: {
        watchId,
      },
    },
  };
};

export default Watch;
