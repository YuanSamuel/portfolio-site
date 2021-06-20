import Image from 'next/image';

export default function Landing() {
  return (
    <div className='flex flex-col items-center justify-center md:flex-row md:justify-around md:px-5 w-full h-screen'>
      <div className='absolute h-screen w-screen overflow-hidden -z-1'>
        <Image
          alt=''
          src='/background.png'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
      <div className='flex mb-10 md:m-0'>
        <Image src='/dev_image.svg' alt='' height={300} width={300} />
      </div>
      <div className='flex flex-col justify-center items-center md:items-start md:h-full'>
        <h1 className='text-5xl m-0 leading-normal'>Hi, I&apos;m Samuel</h1>
        <p className='text-xl'>I&apos;m a software developer based in Texas</p>
      </div>
    </div>
  );
}
