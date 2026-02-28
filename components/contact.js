import Image from "next/image";

const links = [
  {
    href: "https://github.com/YuanSamuel/",
    src: "/github_icon_dark.png",
    alt: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/samuel-yuan/",
    src: "/linkedin_icon.png",
    alt: "LinkedIn",
  },
  {
    href: "https://devpost.com/YuanSamuel",
    src: "/devpost_icon.png",
    alt: "Devpost",
  },
  {
    href: "mailto:syuan@utexas.edu",
    src: "/email_icon.svg",
    alt: "Email",
  },
  {
    href: "https://www.instagram.com/samyo.yuan/",
    src: "/instagram_icon.png",
    alt: "Instagram",
  },
];

export default function Contact() {
  return (
    <div
      className="flex min-h-26rem w-full flex-col items-center justify-start px-8 md:px-12 lg:w-10/12"
      id="contact"
    >
      <div className="mt-14 flex w-full flex-row items-center md:mt-20">
        <div className="h-0 w-full border-b border-gray-300" />
        <h1 className="mx-3 flex flex-none text-left text-4xl font-light leading-normal sm:mx-8 sm:text-5xl">
          Let&apos;s Connect
        </h1>
        <div className="h-0 w-full border-b border-gray-300" />
      </div>

      <p className="mt-6 max-w-xl text-center text-gray-600">
        I&apos;m always open to building cool things, internship opportunities, and chatting about startups or ML systems.
      </p>

      <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-gray-200 p-3 transition hover:-translate-y-0.5 hover:shadow"
          >
            <Image src={link.src} alt={`${link.alt} Icon`} height={32} width={32} className="object-contain" />
          </a>
        ))}
      </div>

      <a href="mailto:syuan@utexas.edu" className="mt-6 text-xl font-medium hover:text-blue-500 sm:text-2xl">
        syuan@utexas.edu
      </a>
    </div>
  );
}
