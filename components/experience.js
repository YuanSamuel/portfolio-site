import { useState } from "react";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("roblox");
  const data = [
    {
      label: "Roblox",
      value: "roblox",
      desc: `roblox`,
    },
    {
      label: "Striveworks",
      value: "striveworks",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Otto",
      value: "otto",
      desc: `otto`,
    },
  ];

  return (
    <div
      className="flex flex-col justify-start items-center w-full px-8 md:px-12 lg:w-7/12 mb-14 lg:mb-20"
      id="experience"
    >
      <div className="mt-14 lg:mt-40 w-full flex flex-row items-center">
        <h1 className="text-5xl m-0 leading-normal font-light text-left mr-8">
          Experience
        </h1>
        <div className="border-b-1 border-gray-400 h-0 w-full"> </div>
      </div>
      <div className="flex flex-col md:flex-row justify-start items-center w-full mt-10">

      </div>
    </div>
  );
}
