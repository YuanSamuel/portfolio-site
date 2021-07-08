import { motion } from "framer-motion";
import Image from "next/image";
import NavBar from "./navbar";

export default function Landing() {
  return (
    <div className="w-full h-screen">
      <NavBar />
      <div
        className="absolute h-screen w-full overflow-hidden -z-1 bg-gradient-to-br from-green-300 to-blue-300"
        style={{ clipPath: "polygon(0 0, 33% 0, 60% 100%, 0% 100%)" }}
      ></div>
      <div className="flex flex-col items-center justify-center md:flex-row md:px-5 w-full h-screen">
        <div className="flex mb-10 md:m-0 md:mr-16">
          <motion.div
            animate={{
              y: ["2%", "-2%"],
            }}
            transition={{ repeat: Infinity, duration: 3, repeatType: "reverse" }}
          >
            <Image src="/computer_image.svg" alt="" height={643} width={680} />
          </motion.div>
        </div>
        <div className="flex flex-col justify-center items-center md:items-start md:h-full">
          <h1 className="text-5xl m-0 leading-normal font-cousine">
            Hi, I&apos;m Samuel Yuan
          </h1>
          <p className="text-2.5xl font-cousine text-gray-300">
            I&apos;m a software developer based in Texas
          </p>
        </div>
      </div>
    </div>
  );
}
