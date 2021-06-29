import Head from 'next/head';
import ActiveLink from './activelink';

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{pageTitle}</title>
      </Head>
      <div className='flex flex-col min-h-screen'>
        <header className='w-full h-16 border-b border-blue-400 flex items-center justify-center'>
          <div className='w-11/12 md:w-full max-w-3xl flex flex-row justify-between'>
            <div className='text-2xl border-blue-400'>
              <ActiveLink href='/blog'>
                <a>My Blog</a>
              </ActiveLink>
            </div>
            <AppNav />
          </div>
        </header>
        <main className='w-11/12 md:w-full max-w-2xl mx-auto my-8 flex-grow'>
          {children}
        </main>
        <footer className='flex flex-col items-center w-full h-16 border-t border-blue-400'>
          <div className='w-11/12 md:w-full max-w-3xl m-auto flex flex-row items-center justify-center'>
            Developed with 🔌
            <a className='pl-8 text-blue-500' href='mailto:syuan@utexas.edu'>
              Contact me
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

function AppNav() {
  return (
    <nav className='text-2xl text-gray-600'>
      <ActiveLink href='/' activeClassName='text-blue-400'>
        <a className='hover:text-blue-400 mr-8'>Home</a>
      </ActiveLink>
      <ActiveLink href='/blog' activeClassName='text-blue-400'>
        <a className='hover:text-blue-400'>Blog</a>
      </ActiveLink>
    </nav>
  );
}
