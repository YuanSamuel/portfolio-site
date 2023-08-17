import Image from "next/image";
import LogoGrid from "./logo_grid";

export default function About() {
  return (
    <div
      className="flex flex-col justify-start items-center w-full px-8 md:px-12 lg:w-10/12 mb-14 lg:mb-20"
      id="about"
    >
      <div className="mt-14 lg:mt-40 w-full flex flex-row items-center">
        <h1 className="text-5xl m-0 leading-normal font-light text-left mr-8">
          About
        </h1>
        <div className="border-b-1 border-gray-400 h-0 w-full"> </div>
      </div>
      <div className="flex flex-col md:flex-row justify-start items-center w-full mt-10">
        <Image
          src="/profile_image.png"
          alt="Samuel Yuan"
          width={340}
          height={340}
          className="flex flex-auto"
        />
        <div className="flex flex-auto md:m-0 md:ml-14 md:w-7/12">
          <p className="md:text-lg">
            Hi! My name is Samuel, a
            {" "}
            <a
              href="https://neo.com/"
              target="_blank"
              className="text-blue-600"
              rel="noreferrer"
            >
              Neo Scholar Finalist
            </a>{" "} and
            {" "}
            <a
              href="https://csb.utexas.edu/"
              target="_blank"
              className="text-blue-600"
              rel="noreferrer"
            >
              Texas CSB Honors
            </a>{" "}
            student at the University of Texas at Austin majoring in both
            Computer Science and Business honors.
            <br />
            <br />
            Over the 6 years I've been programming, I've have had the opportunity to work as a developer at{" "}
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
            , and Otto. I specialize in machine learning, backend development,
            and a little bit of design.
            <br />
            <br />
            I love CS because I love working with others—I've competed with friends in
            10+ hackathons, founded a software development club at my high
            school, and started a volunteer program at local junior highs to
            introduce younger students to programming.
            <br />
            <br />
            Finally, outside of programming, you can find me playing bass, lifting, or completing the <a
              href="https://www.nytimes.com/puzzles/leaderboards/invite/38a5751f-b700-43eb-8d7e-22653294c72a"
              target="_blank"
              className="text-blue-600"
              rel="noreferrer"
            >
              NYT Mini Crossword
            </a>.
          </p>
        </div>
      </div>
      <div className="w-full mt-10 md:ml-7">
        <h2 className="text-2xl text-left text-gray-500">Programming Languages</h2>
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
        <h2 className="text-2xl text-left mt-10 text-gray-500">Frameworks and Platforms</h2>
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
