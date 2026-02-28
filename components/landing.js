import { motion } from "framer-motion";
import Image from "next/image";
import NavBar from "./navbar";

export default function Landing() {
  const scrollTo = (id) => {
    const anchor = document.querySelector(`#${id}`);
    if (anchor) anchor.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden" id="home">
      <NavBar />

      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-green-100 via-cyan-100 to-blue-200"
        style={{ clipPath: "polygon(0 0, 45% 0, 70% 100%, 0% 100%)" }}
      />

      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-8 pt-24 sm:flex-row sm:justify-between md:px-10">
        <div className="mb-8 mt-8 sm:mb-0 sm:mr-10">
          <motion.div
            animate={{ y: ["2%", "-2%"] }}
            transition={{ repeat: Infinity, duration: 3, repeatType: "reverse" }}
          >
            <Image src="/computer_image.svg" alt="Computer" height={420} width={460} priority />
          </motion.div>
        </div>

        <div className="flex max-w-xl flex-col items-start text-left">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">Software Engineer</p>
          <h1 className="m-0 text-4xl leading-tight sm:text-5xl sm:leading-tight font-cousine">
            Hi, I&apos;m Samuel Yuan
          </h1>
          <p className="mt-4 text-xl text-gray-600 sm:text-2xl">
            CS + Business @ UT Austin. I build thoughtful products across ML, backend, and mobile.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="rounded-lg bg-gray-900 px-5 py-3 text-white transition hover:bg-gray-700"
            >
              View Projects
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-gray-300 bg-white px-5 py-3 transition hover:bg-gray-50"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
