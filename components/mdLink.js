import Link from 'next/link';

export default function MDLink({ href, children }) {
  if (href.startsWith('#fnref')) {
    return <></>;
  } else {
    return (
      <Link href={href}>
        <a className='text-blue-500 no-underline' target={!href.startsWith('#fn') ? '_blank' : '_self'}>
          {children}
        </a>
      </Link>
    );
  }
}
