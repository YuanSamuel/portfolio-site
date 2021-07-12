import Head from "next/head";
import ActiveLink from "./activelink";

export default function Layout({ children, pageTitle, pageDescription }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <div className="flex flex-col min-h-screen">
        <header className="w-full h-16 border-b border-blue-500 flex items-center justify-center">
          <div className="w-11/12 md:w-full max-w-5xl flex flex-row justify-between mx-8">
            <div className="text-2xl border-blue-500">
              <ActiveLink href="/">
                <a>Samuel Yuan</a>
              </ActiveLink>
            </div>
            <AppNav />
          </div>
        </header>
        <main className="w-11/12 md:w-full max-w-5xl mx-auto my-8 flex-grow px-8">
          {children}
        </main>
        {/* <footer className="flex flex-col items-center w-full h-16 border-t border-blue-500 bg-gray-100">
          <div className="w-11/12 md:w-full max-w-3xl m-auto flex flex-row items-center justify-center">
            Developed with 🔌
            <a className="pl-8 text-blue-500" href="mailto:syuan@utexas.edu">
              Contact me
            </a>
          </div>
        </footer> */}
      </div>
    </>
  );
}

function AppNav() {
  return (
    <nav className="text-2xl text-gray-600 font-light">
      <ActiveLink href="/" activeClassName="text-blue-500">
        <a className="hover:text-blue-500 mr-8">Home</a>
      </ActiveLink>
      <ActiveLink href="/#writing" activeClassName="text-blue-500">
        <a className="hover:text-blue-500">Writing</a>
      </ActiveLink>
    </nav>
  );
}
