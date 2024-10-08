import { useState } from "react";

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      id: "research",
      label: "UT Machine Learning Labs",
      time: "November 2023 - Present",
      role: "Undergraduate Researcher",
      points: [
        "Lead effort to jointly learn decisions for distinct OS components to predict better scheduling and resource allocation policies",
        "Formulate contrastive learning encoder model to learn representations of OS system traces, e.g. CPU and cache features",
        "Applied Momentum Contrast encoder model to ESM2 LLM embeddings to detect residue-level protein sequence similarity",
        "Implemented Triplet model with InfoNCE loss to compare training with mined positive and negative pairs to MoCo model",
        "Integrated PyTorch models with preprocessed MSA dataset and evaluate similarity of aligned and non-aligned residues",
      ],
      url: "https://www.ifml.institute/",
    },
    {
      id: "databricks",
      label: "Databricks",
      time: "May 2024 - Aug 2024",
      role: "Software Engineering Intern",
      points: [
        "Spearheaded TCP/HTTPS networking connectivity prober service to monitor health of 550+ critical cloud resources globally",
        "Established multitenant thread pool/worker model to efficiently schedule and execute 35K+ probes hourly across all shards",
        "Implemented dynamic self-onboarding schema and CLI with customizable Prometheus alerting and routing per probe",
      ],
      url: "https://www.databricks.com/",
    },
    {
      id: "roblox",
      label: "Roblox",
      time: "May 2023 - Aug 2023",
      role: "Software Engineering Intern",
      points: [
        "Deployed gRPC endpoint on .NET service to efficiently store and serve over 500M searches from 150M users in CockroachDB",
        "Researched chi-squared algorithm to detect trending searches from over 40M daily searches stored in data warehouse",
        "Implemented system to generate and store trending search candidates daily using Spark and Hive deployed on Airflow",
        "Migrated services from workstation to server garbage collection to decrease memory usage by ~5% and stabilize CPU use",
      ],
      url: "https://www.roblox.com/",
    },
    {
      id: "striveworks",
      label: "Striveworks",
      time: "May 2022 - Aug 2022",
      role: "Software Engineering Intern",
      points: [
        "Constructed Golang microservice to analyze and report product dependencies, deployed on Kubernetes cluster with Helm",
        "Designed Kubernetes-in-Docker cluster to deploy local instance of microservice for testing, mocked out various features",
        "Wrote Python unit tests interfacing with Amazon S3 and various platform SDK functions using Pytest and Pandas libraries",
        "Created CI/CD pipeline jobs to pull in-development Docker images from private registry and test before deployment",
      ],
      url: "https://www.striveworks.com/",
    },
    {
      id: "otto",
      label: "Otto",
      time: "Jul 2020 - Jan 2022",
      role: "Founding Engineer",
      points: [
        "Developed cross-platform mobile app with 600+ downloads and average rating of 4.4 stars using Flutter and GraphQL",
        "Architected efficient NoSQL structure for storing and retrieving user and pet data on Firebase cloud database",
        "Generated $100+ in yearly recurring revenue by implementing paid in-app subscription system with premium features",
      ],
    },
  ];

  return (
    <div
      className="flex flex-col justify-start items-center w-full px-8 md:px-12 lg:w-4/5 xl:w-10/12 mb-14 lg:mb-20"
      id="experience"
    >
      <div className="mt-14 lg:mt-20 w-full flex flex-row items-center">
        <h1 className="text-5xl m-0 leading-normal font-light text-left mr-8">
          Experience
        </h1>
        <div className="border-b-1 border-gray-400 h-0 w-full"> </div>
      </div>
      <div className="flex flex-col md:flex-row justify-start items-center w-full mt-10">
        <div className="hidden md:flex flex-col w-1/4 relative z-0 list-none">
          {tabs.map((tab, index) => (
            <li
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`cursor-pointer pl-4 border-l-2 h-12 flex items-center w-full ${
                activeTab === index
                  ? "text-blue-500 bg-gray-100"
                  : "hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </li>
          ))}
          <div
            className="hidden md:inline bg-blue-500 absolute top-0 left-0 transition-transform duration-300 z-10 w-0.5 h-12"
            style={{
              width: "4px",
              transform: `translateY(${3 * activeTab}rem)`,
            }}
          />
        </div>
        <HorizontalTabBar />
        <div className="w-full lg:w-3/4 p-4 space-y-2">
          <p className="text-2xl">
            {tabs[activeTab].role}{" "}
            <span className="text-blue-500">
              <a
                href={tabs[activeTab].url}
                target="_blank"
                rel="noreferrer"
                className={`${
                  tabs[activeTab].url != null ? "hover:underline" : ""
                }`}
              >
                @ {tabs[activeTab].label}
              </a>
            </span>
          </p>
          <p className="text-gray-500 text-lg">{tabs[activeTab].time}</p>
          <ul className="list-disc list-inside space-y-1">
            {tabs[activeTab].points.map((point) => (
              <li className="text-gray-500 text-md">{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  function HorizontalTabBar() {
    return (
      <div className="flex flex-row md:hidden w-full relative z-0 list-none">
        {tabs.map((tab, index) => (
          <li
            key={tab.id}
            onClick={() => setActiveTab(index)}
            className={`cursor-pointer border-b-2 h-12 flex items-center w-full justify-center ${
              activeTab === index
                ? "text-blue-500 bg-gray-100 border-blue-500"
                : "hover:bg-gray-100"
            }`}
          >
            {tab.label}
          </li>
        ))}
      </div>
    );
  }
}
