import Image from "next/image";

export default function Contact() {
  return (
    <div
      className="flex flex-col justify-start items-center px-14 w-full lg:w-10/12 min-h-26rem"
      id="contact"
    >
      <div className="mt-20 w-full flex flex-row items-center">
        <div className="border-b-1 border-gray-400 h-0 w-full flex flex-shrink">
          {" "}
        </div>
        <h1 className="text-5xl m-0 leading-normal font-light text-left mx-8 flex flex-none">
          Get In Touch
        </h1>
        <div className="border-b-1 border-gray-400 h-0 w-full flex flex-shrink">
          {" "}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center mt-8">
        <a
          href="https://github.com/YuanSamuel/"
          target="_blank"
          rel="noreferrer"
          className="mx-4 hover:-translate-y-0.5"
        >
          <Image
            src="/github_icon_dark.png"
            alt="GitHub Icon"
            height={45}
            width={45}
            className="object-contain"
          />
        </a>
        <a
          href="https://devpost.com/YuanSamuel"
          target="_blank"
          rel="noreferrer"
          className="mx-4 hover:-translate-y-0.5"
        >
          <Image
            src="/devpost_icon.png"
            alt="Devpost Icon"
            height={45}
            width={45}
            className="object-contain"
          />
        </a>
        <a
          href="mailto:syuan@utexas.edu"
          target="_blank"
          rel="noreferrer"
          className="mx-4 hover:-translate-y-0.5"
        >
          <Image
            src="/email_icon.svg"
            alt="Email Icon"
            height={45}
            width={45}
            className="object-contain"
          />
        </a>
        <a
          href="https://www.instagram.com/samuel.yuan17/"
          target="_blank"
          rel="noreferrer"
          className="mx-4 hover:-translate-y-0.5"
        >
          <Image
            src="/instagram_icon.png"
            alt="Instagram Icon"
            height={45}
            width={45}
            className="object-contain"
          />
        </a>
      </div>
      <a
        href="mailto:syuan@utexas.edu"
        target="_blank"
        rel="noreferrer"
        className="mt-6 hover:text-blue-500"
      >
        <h2 className="text-2xl">syuan@utexas.edu</h2>
      </a>
    </div>
  );
}
