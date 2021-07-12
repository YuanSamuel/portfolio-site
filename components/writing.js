import Image from "next/image";
import { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function Writing({ posts }) {
  const [seeFull, setSeeFull] = useState(false);

  const colorsFrom = ["235,51,73", "255,153,102", "248,181,0"];
  const colorsTo = ["244,92,67", "255,94,98", "252,234,187"];

  const shownPosts = seeFull ? posts : posts.slice(0, 3);
  
  return (
    <div
      className="flex flex-col justify-start items-center w-full px-8 md:px-12 lg:w-10/12 mb-12 md:mb-20"
      id="writing"
    >
      <div className="mt-14 md:mt-20 w-full flex flex-row items-center mb-14">
        <h1 className="text-5xl m-0 leading-normal font-light text-left mr-8">
          Writing
        </h1>
        <div className="border-b-1 border-gray-400 h-0 w-full"> </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mb-6 justify-center gap-10 md:gap-16">
        {shownPosts.map((post, index) => {
          const { frontmatter, slug } = post;
          const { description, title, image } = frontmatter;
          return (
            <Post
              title={title}
              description={description}
              image={image}
              link={"/blog/" + slug}
              colorFrom={colorsFrom[index % colorsFrom.length]}
              colorTo={colorsTo[index % colorsTo.length]}
              key={title}
            />
          );
        })}
      </div>
      {/* <div className="">
        <p
          className="text-blue-500 text-right text-lg font-light hover:cursor-pointer"
          onClick={() => setSeeFull(!seeFull)}
        >
          {seeFull ? "Hide" : "Expand"}
        </p>
      </div> */}
    </div>
  );
}

function Post({ title, description, image, link, colorFrom, colorTo }) {

  const isLg = useMediaQuery("(min-width:1024px)");

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div
        className="rounded-lg h-64 w-64 md:h-72 md:w-72 lg:h-64 lg:w-64 xl:h-72 xl:w-72 bg-gray-400 overflow-hidden relative flex flex-col justify-around"
        style={{
          background: `linear-gradient(0deg, rgba(${colorFrom},1) 0%, rgba(${colorTo},0.33) 100%)`,
        }}
      >
        <div className="flex flex-shrink w-64 md:w-72 lg:w-64 xl:w-72">
          <Image
            src={image}
            alt={title}
            width={300}
            height={210}
            objectFit="cover"
            className="opacity-25 flex flex-shrink"
          />
        </div>
        <div className="flex flex-col flex-none mx-4 my-4 text-white">
          <h2 className="text-xl flex flex-none mb-2 font-light">{title}</h2>
          <p className="text-sm flex flex-none font-extralight">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
