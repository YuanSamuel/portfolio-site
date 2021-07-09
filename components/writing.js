import Image from "next/image";

export default function Writing({ posts }) {
  const colorsFrom = ["235,51,73", "255,153,102", "248,181,0"];
  const colorsTo = ["244,92,67", "255,94,98", "252,234,187"];
  console.log(posts);

  return (
    <div
      className="flex flex-col justify-start items-center px-20 lg:w-10/12 mb-12"
      id="writing"
    >
      <div className="mt-20 w-full flex flex-row items-center mb-14">
        <h1 className="text-5xl m-0 leading-normal font-light text-left mr-8">
          Writing
        </h1>
        <div className="border-b-1 border-gray-400 h-0 w-full"> </div>
      </div>
      <div className="flex flex-row w-full justify-around items-center mb-6">
        {posts.map((post, index) => {
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
      <div className="w-full mr-24">
        <p className="text-blue-500 text-right text-lg font-light">See more</p>
      </div>
    </div>
  );
}

function Post({ title, description, image, link, colorFrom, colorTo }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div
        className="rounded-lg h-72 w-72 bg-gray-400 overflow-hidden relative flex flex-col justify-around"
        style={{
          background: `linear-gradient(0deg, rgba(${colorFrom},1) 0%, rgba(${colorTo},0.33) 100%)`,
        }}
      >
        <div className="flex flex-shrink w-72">
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
          <h3 className="text-xl flex flex-none mb-2 font-light">{title}</h3>
          <p className="text-sm flex flex-none font-extralight">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}
