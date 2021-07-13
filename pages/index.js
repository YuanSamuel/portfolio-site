import {posts} from '../posts'

import Head from "next/head";
import Landing from "../components/landing";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Writing from "../components/writing";

export default function Home({ posts }) {
  return (
    <div className="flex flex-col justify-center">
      <Head>
        <title>Samuel Yuan</title>
        <meta name="description" content="Samuel Yuan's Portfolio Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full">
        <Landing />
        <About />
        <Projects />
        <Writing posts={posts} />
        <Contact />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const postsData = posts();
  return {
    props: {
      posts: postsData,
    },
  };
}
