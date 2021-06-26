import Image from 'next/image';

export default function Landing() {
  return (
    <div className='flex flex-col items-center justify-center md:flex-row md:justify-around md:px-5 w-full h-screen bg-gradient-to-r from-green-200 to-blue-200'>
      <div className='flex mb-10 md:m-0'>
        <Image src='/dev_image.svg' alt='' height={300} width={300} />
      </div>
      <div className='flex flex-col justify-center items-center md:items-start md:h-full'>
        <h1 className='text-6xl m-0 leading-normal font-medium'>Hi, I&apos;m Samuel</h1>
        <p className='text-2xl'>I&apos;m a software developer based in Texas</p>
      </div>
    </div>
  );
}
