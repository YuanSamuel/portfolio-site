import Image from "next/image";
import NavBar from "./navbar";

export default function Landing() {
  return (
    <div className="w-full h-screen bg-landing-gradient bg-no-repeat bg-contain">
      <NavBar />
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-around md:px-5 w-full h-screen">
        <div className="flex mb-10 md:m-0">
          <Image src="/computer_image.png" alt="" height={520} width={850} />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start md:h-full">
          <h1 className="text-5xl m-0 leading-normal font-medium font-cousine">
            Hi, I&apos;m Samuel Yuan
          </h1>
          <p className="text-2xl font-cousine text-gray-300">
            I&apos;m a software developer based in Texas
          </p>
        </div>
      </div>
    </div>
  );
}
