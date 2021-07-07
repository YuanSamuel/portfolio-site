import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col justify-start items-center px-20 lg:w-10/12 min-h-screen">
      <div className="mt-24 w-full flex flex-row items-center">
        <h1 className="text-5xl m-0 leading-normal font-light text-left mr-8">
          About
        </h1>
        <div className="border-b-1 border-gray-400 h-0 w-full"> </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-start items-center md:items-start w-full mt-10">
        <Image
          src="/profile_image.png"
          alt="Samuel Yuan"
          width={320}
          height={320}
          className="flex flex-auto"
        />
        <div className="flex flex-auto mb-5 md:m-0 md:ml-14 md:w-7/12 md:mt-4">
          <p className="md:text-lg">
            Hi! My name is Samuel and I'm passionate about turning ideas into
            reality through software. Currently, I'm a rising{" "}
            <a
              href="https://csb.utexas.edu/"
              target="_blank"
              className="text-blue-600"
              rel="noreferrer"
            >
              Texas CSB Honors
            </a>{" "}
            student at UT Austin majoring in Computer Science and Business
            honors.
            <br />
            <br />
            I've been programming for ~4 years now and have had the opportunity
            to work as a developer at{" "}
            <a
              href="https://petcodeusa.com/"
              target="_blank"
              className="text-blue-600"
              rel="noreferrer"
            >
              PetCode
            </a>{" "}
            and{" "}
            <a
              href="https://fellowship.mlh.io/"
              target="_blank"
              className="text-blue-600"
              rel="noreferrer"
            >
              MLH Fellowship
            </a>
            , gaining experience in working with a ton of different technologies
            and meeting some amazing people.
            <br />
            <br />
            Finally, I love working with others—I've competed with friends in
            10+ hackathons, founded a software development club at my high
            school, and started a volunteer program at local junior highs to
            introduce younger students to programming.
          </p>
        </div>
      </div>
      <div className="w-full mt-10 ml-7">
        <h2 className="text-xl md:text-2xl text-left">I've Worked With</h2>
        <div className="flex flex-row mt-5 mb-5">
          <div className="mr-5">
            <Image
              src="/flutter_logo.svg"
              alt="Flutter SDK Logo"
              width={100}
              height={100}
            />
          </div>
          <div className="mr-5">
            <Image
              src="/firebase_logo.svg"
              alt="Firebase Logo"
              width={100}
              height={100}
              className="mr-10"
            />
          </div>
          <div className="mr-5">
            <Image
              src="/graphql_logo.svg"
              alt="GraphQL Logo"
              width={100}
              height={100}
              className="mr-10"
            />
          </div>
          <div className="mr-5">
            <Image
              src="/tailwind_logo.svg"
              alt="Tailwind CSS Logo"
              width={100}
              height={100}
              className="mr-10"
            />
          </div>
          <div className="mr-5">
            <Image
              src="/gcp_logo.png"
              alt="GCP Logo"
              width={100}
              height={100}
              className="mr-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
