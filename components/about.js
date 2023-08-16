import Image from "next/image";
import LogoGrid from "./logo_grid";

export default function About() {
  return (
    <div
      className="flex flex-col justify-start items-center w-full px-8 md:px-12 lg:w-10/12 mb-14 lg:mb-20"
      id="about"
    >
      <div className="mt-28 lg:mt-40 w-full flex flex-row items-center">
        <h1 className="text-5xl m-0 leading-normal font-light text-left mr-8">
          About
        </h1>
        <div className="border-b-1 border-gray-400 h-0 w-full"> </div>
      </div>
      <div className="flex flex-col md:flex-row justify-start items-center md:items-start w-full mt-10">
        <Image
          src="/profile_image.png"
          alt="Samuel Yuan"
          width={320}
          height={320}
          className="flex flex-auto"
        />
        <div className="flex flex-auto mt-10 md:m-0 md:ml-14 md:w-7/12 md:mt-4">
          <p className="md:text-lg">
            Hi! My name is Samuel, a{" "}
            <a
              href="https://csb.utexas.edu/"
              target="_blank"
              className="text-blue-600"
              rel="noreferrer"
            >
              Texas CSB Honors
            </a>{" "}
            student at UT Austin majoring in both Computer Science and Business
            honors.
            <br />
            <br />
            I've had the opportunity to work as a developer at{" "}
            <a
              href="https://roblox.com/"
              target="_blank"
              className="text-blue-600"
              rel="noreferrer"
            >
              Roblox
            </a>
            ,{" "}
            <a
              href="https://www.striveworks.com/"
              target="_blank"
              className="text-blue-600"
              rel="noreferrer"
            >
              Striveworks
            </a>
            ,{" "}
            <a
              href="https://fellowship.mlh.io/"
              target="_blank"
              className="text-blue-600"
              rel="noreferrer"
            >
              MLH Fellowship
            </a>
            , and Otto, gaining experience in working with a ton of different
            technologies and meeting some amazing people.
            <br />
            <br />
            Finally, I love working with others—I've competed with friends in
            10+ hackathons, founded a software development club at my high
            school, and started a volunteer program at local junior highs to
            introduce younger students to programming.
          </p>
        </div>
      </div>
      <div className="w-full mt-10 md:ml-7">
        <h2 className="text-2xl text-left">Programming Languages</h2>
        <LogoGrid
          logos={[
            "/logos/golang_logo.svg",
            "/logos/python_logo.svg",
            "/logos/c_logo.svg",
            "/logos/csharp_logo.svg",
            "/logos/dart_logo.svg",
            "/logos/javascript_logo.svg",
          ]}
        ></LogoGrid>
        <h2 className="text-2xl text-left">Frameworks and Platforms</h2>
        <LogoGrid
          logos={[
            "/logos/spark_logo.svg",
            "/logos/pytorch_logo.svg",
            "/logos/kubernetes_logo.svg",
            "/logos/airflow_logo.png",
            "/logos/flutter_logo.svg",
            "/logos/pandas_logo.svg",
          ]}
        ></LogoGrid>
      </div>
    </div>
  );
}
