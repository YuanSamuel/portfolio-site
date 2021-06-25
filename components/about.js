import Image from 'next/image';

export default function About() {
  return (
    <div className='flex flex-col justify-start items-center px-20 w-full h-screen'>
      <div className='mt-10'>
        <h1 className='text-5xl m-0 leading-normal underline'>About</h1>
      </div>
      <div className='flex flex-row justify-start items-start w-full'>
        <Image
          src='/profile_image.jpeg'
          alt='Profile Photo'
          width={300}
          height={300}
        />
        <div className='ml-14'>
          <p>This is about me</p>
        </div>
      </div>
    </div>
  );
}
