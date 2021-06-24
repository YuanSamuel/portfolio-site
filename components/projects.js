import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Button from '@material-ui/core/Button';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

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
    <div className='flex flex-col justify-start items-center px-20 w-full h-screen'>
      <div className='mt-10'>
        <h1 className='text-5xl m-0 leading-normal underline'>Projects</h1>
      </div>
      <motion.div
        className='flex flex-col justify-start items-center min-h-screen'
        // variants={projects}
        // initial="hidden"
        // animate="show"
      >
        <ProjectDiv
          photo='/petcode_image.png'
          title='PetCode'
          description="Developed the mobile app. PetCode is a pet management system that takes the stress out of pet ownership by allowing owners to centralize their pet's data. With PetCode, managing pet's health, social needs, and safety has never been easier."
          tech={['Flutter', 'Firebase', 'GraphQL', 'Maps API']}
          links={[
            {
              type: 'GitHub',
              link: 'https://github.com/petcodeapp',
            },
            {
              type: 'Launch',
              link: 'https://petcodeusa.com',
            },
          ]}
        ></ProjectDiv>
        <ProjectDiv
          photo='/capsule_map_image.png'
          title='CapsuleMap'
          description='CapsuleMap is a lifestyle app aimed at keeping users mentally and physically healthy. At a desired place, users may choose to create a capsule, adding a title, memo, photos, and/or videos that reflect their sentiment towards the current location. After creating it, users can choose to share the capsule with friends. After the capsule has been sent, it will appear in the "sent" tab in the user&apos;s capsules page, making it easy to keep track of personal capsules.'
          tech={['Flutter', 'Firebase', 'MobX']}
          links={[
            {
              type: 'Launch',
              link: 'https://devpost.com/software/vscode-github-projects',
            },
          ]}
        ></ProjectDiv>
        <ProjectDiv
          photo='/vs_code_github_projects_image.jpg'
          title='VS Code GitHub Projects'
          description="A VS Code extension that brings GitHub's projects into VS Code."
          tech={['Svelte', 'VS Code API', 'GraphQL', 'GitHub API']}
          links={[
            {
              type: 'GitHub',
              link: 'https://github.com/MLH-Fellowship/vscode-github-projects',
            },
            {
              type: 'Launch',
              link: 'https://marketplace.visualstudio.com/items?itemName=Pod212.vscode-github-projects',
            },
          ]}
        ></ProjectDiv>
      </motion.div>
    </div>
  );
}

function ProjectDiv({ photo, title, description, tech, links }) {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
    // if (!inView) {
    //   controls.start("hidden");
    // }
  }, [controls, inView]);

  function getTechList(tech) {
    return tech.map((name, index) => (
      <p key={name + index} className='mr-5'>
        {name}
      </p>
    ));
  }

  function getLinksList(links) {
    return links.map((link, index) => (
      <ProjectLink
        key={link['link'] + index}
        type={link['type']}
        link={link['link']}
      />
    ));
  }

  return (
    <motion.div
      ref={ref}
      className='w-4/5 rounded-md flex flex-col md:flex-row my-8'
      variants={item}
      initial='hidden'
      animate={controls}
    >
      <motion.img
        src={photo}
        whileHover={{ scale: 1.05 }}
        className='overflow-hidden rounded-md object-cover md:min-w-30vh md:max-w-30vh lg:min-w-40vh lg:max-w-40vh max-h-30vh mr-16'
        alt=''
      />
      <div className='text-left mt-4'>
        <h2 className='text-2xl mb-6 font-medium'>{title}</h2>
        <p className='text-md mb-6'>{description}</p>
        {tech ? (
          <ProjectTechnologies>{getTechList(tech)}</ProjectTechnologies>
        ) : (
          <div></div>
        )}
        {links ? (
          <ProjectLinks>{getLinksList(links)}</ProjectLinks>
        ) : (
          <div></div>
        )}
      </div>
    </motion.div>
  );
}

function ProjectTechnologies({ children }) {
  return <div className='flex flex-row mb-6'>{children}</div>;
}

function ProjectLinks({ children }) {
  return <div className='flex flex-row'>{children}</div>;
}

function ProjectLink({ type, link }) {
  function getIcon() {
    if (type === 'GitHub') {
      return '/github_icon.png';
    } else if (type === 'Launch') {
      return '/launch_icon.svg';
    }
  }

  return (
    <div className='mr-5'>
      <Button
        variant='outlined'
        color='default'
        onClick={() => window.open(link, '_blank')}
        size='small'
      >
        <Image src={getIcon()} width={30} height={30} />
        &nbsp;&nbsp;{type}
      </Button>
    </div>
  );
}
