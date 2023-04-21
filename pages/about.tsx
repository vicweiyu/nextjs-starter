import Head from 'next/head';

import NavButtons from '../components/NavButtons';

export default function About() {
  return (
    <>
      <Head>
        <title>About Title</title>
      </Head>
      <h1>About Page</h1>
      <NavButtons />
    </>
  );
}
