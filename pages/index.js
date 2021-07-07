import Head from 'next/head';
import Landing from '../components/landing';
import About from '../components/about';
import Projects from '../components/projects';
import Socials from '../components/socials';

export default function Home() {
  return (
    <div className='flex flex-col justify-center'>
      <Head>
        <title>Samuel Yuan</title>
        <meta name='description' content="Samuel Yuan's Portfolio Site" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex flex-col items-center justify-center w-full'>
        <Landing />
        <About />
        <Projects />
      </main>
    </div>
  );
}
