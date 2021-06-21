import Image from 'next/image';

export default function Socials() {
  return (
    <div className='invisible md:visible fixed right-5 bottom-0 flex flex-col justify-center'>
      <div className='py-1 hover:-translate-y-0.5'>
        <a href='https://www.linkedin.com/in/yuansamuel/' target='_blank'>
          <Image
            src='/linkedin_icon.png'
            alt=''
            height={30}
            width={30}
            className='object-contain'
          />
        </a>
      </div>
      <div className='py-1 hover:-translate-y-0.5'>
        <a href='https://github.com/YuanSamuel/' target='_blank'>
          <Image
            src='/github_icon.png'
            alt=''
            height={30}
            width={30}
            className='object-contain'
          />
        </a>
      </div>
      <div className='py-1 hover:-translate-y-0.5'>
        <a href='mailto:syuan@utexas.edu' target='_blank'>
          <Image
            src='/email_icon.svg'
            alt=''
            height={30}
            width={30}
            className='object-contain'
          />
        </a>
      </div>
      <div className='py-1 hover:-translate-y-0.5'>
        <a href='https://www.instagram.com/samuel.yuan17/' target='_blank'>
          <Image
            src='/instagram_icon.png'
            alt=''
            height={30}
            width={30}
            className='object-contain'
          />
        </a>
      </div>

      <div className='border h-16 w-0.5 flex ml-3.5 border-black'></div>
    </div>
  );
}
