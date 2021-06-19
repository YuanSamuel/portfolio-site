import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-col justify-center h-screen'>
      <Head>
        <title>Samuel Yuan</title>
        <meta name='description' content='Personal portfolio for Samuel Yuan' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='fixed h-screen w-screen overflow-hidden -z-1'>
        <Image
          alt=''
          src='/background.png'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>

      <main className='flex flex-col items-center justify-center w-full flex-1 px-20'>
        <div className='flex flex-row justify-around px-20 my-40 w-full'>
          <div className='flex'>
            <Image src='/dev_image.svg' alt='' height={300} width={300} />
          </div>
          <div className='flex flex-col justify-center items-start h-full'>
            <h1 className='text-5xl m-0 leading-normal'>Hi, I&apos;m Samuel</h1>
            <p className='text-xl'>
              I&apos;m a software developer based in Texas
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
