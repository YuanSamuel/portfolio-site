import { motion } from "framer-motion";
import Image from "next/image";
import NavBar from "./navbar";

export default function Landing() {
  return (
    <div className="w-full h-screen">
      <NavBar />
      <div
        className="absolute h-screen w-full overflow-hidden -z-1 bg-gradient-to-br from-green-300 to-blue-300 hidden sm:block"
        style={{ clipPath: "polygon(0 0, 33% 0, 60% 100%, 0% 100%)" }}
      ></div>
      <div
        className="absolute h-screen w-full overflow-hidden -z-1 bg-gradient-to-br from-green-300 to-blue-300 sm:hidden"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
      ></div>
      <div className="flex flex-col items-center justify-around sm:justify-center px-8 sm:flex-row sm:px-5 w-full h-screen">
        <div className="flex mt-20 mb-10 sm:m-0 sm:mr-16">
          <motion.div
            animate={{
              y: ["2%", "-2%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              repeatType: "reverse",
            }}
          >
            <Image src="/computer_image.svg" alt="Computer" height={643} width={680} />
          </motion.div>
        </div>
        <div className="flex flex-col justify-center sm:m-0 items-start sm:h-full">
          <h1 className="text-4xl sm:text-5xl m-0 leading-normal sm:leading-normal font-cousine">
            Hi, I&apos;m Samuel Yuan
          </h1>
          <p className="text-2xl sm:text-2.5xl font-cousine text-gray-300">
            I&apos;m a developer based in Texas 🌵
          </p>
        </div>
      </div>
    </div>
  );
}
