import Image from 'next/image';

export default function Socials() {
  return (
    <div className='invisible md:visible fixed right-5 bottom-5 flex flex-col'>
      <div className='py-1 hover:-translate-y-0.5'>
        <a href='https://github.com/YuanSamuel/' target='_blank'>
          <Image
            src='/github_icon.png'
            alt=''
            height={32}
            width={32}
            className='object-contain'
          />
        </a>
      </div>
      <div className='py-1 hover:-translate-y-0.5'>
        <a href='https://www.instagram.com/samuel.yuan17/' target='_blank'>
          <Image
            src='/instagram_icon.png'
            alt=''
            height={32}
            width={32}
            className='object-contain'
          />
        </a>
      </div>
      <div className='py-1 hover:-translate-y-0.5'>
        <a href='https://www.linkedin.com/in/yuansamuel/' target='_blank'>
          <Image
            src='/linkedin_icon.png'
            alt=''
            height={35}
            width={35}
            className='object-contain'
          />
        </a>
      </div>
    </div>
  );
}
