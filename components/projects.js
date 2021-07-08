import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Button from "@material-ui/core/Button";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const projects = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.5 },
  },
};

const item = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, transition: { duration: 1.0 } },
};

export default function Projects() {
  return (
    <div
      className="flex flex-col justify-start items-center px-20 lg:w-10/12 min-h-screen mb-12"
      id="projects"
    >
      <div className="mt-20 w-full flex flex-row items-center">
        <h1 className="text-5xl m-0 leading-normal font-light text-left mr-8">
          Projects
        </h1>
        <div className="border-b-1 border-gray-400 h-0 w-full"> </div>
      </div>
      <motion.div
        className="flex flex-col justify-start items-center min-h-screen px-8"
        // variants={projects}
        // initial="hidden"
        // animate="show"
      >
        <ProjectDiv
          photo="https://ik.imagekit.io/samuelyuan/petcode_image_X438InxYo.png"
          title="PetCode"
          description={[
            "PetCode is a pet management system that takes the stress out of pet ownership by allowing owners to centralize their pet's data. With PetCode, managing pet's health, social needs, and safety has never been easier.",
            <br />,
            <br />,
            "I developed the mobile app, focusing on integrating Firebase, our GraphQL API, and in app purchases for both iOS and Android.",
          ]}
          tech={["Flutter", "Firebase", "GraphQL", "Maps API"]}
          links={[
            {
              type: "GitHub",
              link: "https://github.com/petcodeapp",
            },
            {
              type: "Launch",
              link: "https://petcodeusa.com",
            },
          ]}
          colorFrom="78,84,200"
          colorTo="143,148,251"
        ></ProjectDiv>
        <ProjectDiv
          photo="https://ik.imagekit.io/samuelyuan/capsule_map_image_XK4JUfZIu.png"
          title="CapsuleMap"
          description='CapsuleMap is a lifestyle app aimed at keeping users mentally and physically healthy. At a desired place, users may choose to create a capsule, adding a title, memo, photos, and/or videos that reflect their sentiment towards the current location. After creating it, users can choose to share the capsule with friends. After the capsule has been sent, it will appear in the "sent" tab in the user&apos;s capsules page, making it easy to keep track of personal capsules.'
          tech={["Flutter", "Firebase", "MobX"]}
          links={[
            {
              type: "Launch",
              link: "https://devpost.com/software/capsulemap",
            },
          ]}
          colorFrom="0,130,200"
          colorTo="102,125,182"
        ></ProjectDiv>
        <ProjectDiv
          photo="https://ik.imagekit.io/samuelyuan/vs_code_github_projects_image_c0zTLqDm8.jpg"
          title="VS Code GitHub Projects"
          description="A VS Code extension that brings GitHub's projects into VS Code."
          tech={["Svelte", "VS Code API", "GraphQL", "GitHub API"]}
          links={[
            {
              type: "GitHub",
              link: "https://github.com/MLH-Fellowship/vscode-github-projects",
            },
            {
              type: "Launch",
              link: "https://marketplace.visualstudio.com/items?itemName=Pod212.vscode-github-projects",
            },
          ]}
          colorFrom="74,194,154"
          colorTo="189,255,243"
        ></ProjectDiv>
      </motion.div>
    </div>
  );
}

function ProjectDiv({
  photo,
  title,
  description,
  tech,
  links,
  colorFrom,
  colorTo,
}) {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
    // if (!inView) {
    //   controls.start("hidden");
    // }
  }, [controls, inView]);

  function getTechList(tech) {
    return tech.map((name, index) => (
      <p key={name + index} className="mr-5 text-white">
        {name}
      </p>
    ));
  }

  function getLinksList(links) {
    return links.map((link, index) => (
      <ProjectLink
        key={link["link"] + index}
        type={link["type"]}
        link={link["link"]}
      />
    ));
  }

  return (
    <motion.div
      ref={ref}
      className="w-full rounded-xl flex flex-col md:flex-row md:justify-between my-8 text-white max-h-76"
      style={{
        background: `linear-gradient(90deg, rgba(${colorFrom},1) 0%, rgba(${colorTo},0.33) 100%);`,
      }}
      variants={item}
      initial="hidden"
      animate={controls}
    >
      <div className="text-left my-8 mx-8 w-full items-center">
        <div className="flex flex-row justify-between">
          <h2 className="text-2xl mb-6">{title}</h2>
          {links ? (
            <ProjectLinks>{getLinksList(links)}</ProjectLinks>
          ) : (
            <div></div>
          )}
        </div>
        <p className="text-md mb-6 whitespace-pre-wrap font-light">
          {description}
        </p>
        {tech ? (
          <ProjectTechnologies>{getTechList(tech)}</ProjectTechnologies>
        ) : (
          <div></div>
        )}
      </div>
      <img
        src={photo}
        className="rounded-md object-cover max-h-full max-w-full -z-1"
        alt="Project Image"
      />
    </motion.div>
  );
}

function ProjectTechnologies({ children }) {
  return <div className="flex flex-row mb-6">{children}</div>;
}

function ProjectLinks({ children }) {
  return <div className="flex flex-row">{children}</div>;
}

function ProjectLink({ type, link }) {
  function getIcon() {
    if (type === "GitHub") {
      return "/github_icon_light.png";
    } else if (type === "Launch") {
      return "/launch_icon_light.svg";
    }
  }
  return (
    <div className="mr-5">
      <a href={link} target="_blank" rel="noreferrer">
        <Image src={getIcon()} width={30} height={30} alt={type + " Icon"} />
      </a>
    </div>
  );
}
