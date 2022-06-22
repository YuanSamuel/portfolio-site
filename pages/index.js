import {posts} from '../posts'

import Head from "next/head";
import Landing from "../components/landing";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";

export default function Home({ posts }) {
  return (
    <div className="flex flex-col justify-center">
      <Head>
        <title>Samuel Yuan</title>
        <meta name="description" content="Samuel Yuan's Portfolio Site" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="https://ik.imagekit.io/samuelyuan/Website_Preview_9UZVEzHGC6i.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643933086408" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full">
        <Landing />
        <About />
        <Projects />
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
