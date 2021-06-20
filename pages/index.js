import Head from 'next/head';
import Landing from '../components/landing';
import Projects from '../components/projects';

export default function Home() {
  return (
    <div className='flex flex-col justify-center'>
      <Head>
        <title>Samuel Yuan</title>
        <meta name='description' content='Personal portfolio for Samuel Yuan' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex flex-col items-center justify-center w-full flex-1'>
        <Landing />
        <Projects />
      </main>
    </div>
  );
}
