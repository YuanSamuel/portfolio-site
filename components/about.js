import Image from 'next/image';

export default function About() {
  return (
    <div className='flex flex-col justify-start items-center px-20 w-9/12 min-h-screen'>
      <div className='mt-10'>
        <h1 className='text-5xl m-0 leading-normal underline'>About</h1>
      </div>
      <div className='flex flex-row justify-start items-start w-full mt-10'>
        <Image
          src='/profile_image.jpeg'
          alt='Profile Photo'
          width={300}
          height={300}
          className='rounded-lg flex flex-none'
        />
        <div className='ml-14 flex flex-1'>
          <p className='text-lg'>
            Hi! My name is Samuel and I'm passionate about turning ideas into
            reality through software. Currently, I'm a rising{' '}
            <a href='https://csb.utexas.edu/' target='_blank' className='text-blue-600'>
              Texas CSB Honors
            </a>{' '}
            student at UT Austin majoring in Computer Science and Business
            honors.
            <br />
            <br />
            I've been programming for ~4 years now and have had the opportunity
            to work as a developer at{' '}
            <a href='https://petcodeusa.com/' target='_blank' className='text-blue-600'>
              PetCode
            </a>{' '}
            and{' '}
            <a href='https://fellowship.mlh.io/' target='_blank' className='text-blue-600'>
              MLH Fellowship
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
