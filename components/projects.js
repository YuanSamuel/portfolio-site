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
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.'
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
          photo='/dev_image.svg'
          title='Sample Project'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          tech={['React Native', 'Firebase', 'Mobile App']}
          links={[
            {
              type: 'GitHub',
              link: 'https://github.com',
            },
          ]}
        ></ProjectDiv>
        <ProjectDiv
          photo='/dev_image.svg'
          title='Sample Project 2'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          tech={['Python', 'Django', 'HTML']}
          links={[
            {
              type: 'GitHub',
              link: 'https://github.com/django/django',
            },
            {
              type: 'Launch',
              link: 'https://www.djangoproject.com/',
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
      className='w-4/5 rounded-md flex flex-row relative my-8'
      variants={item}
      initial='hidden'
      animate={controls}
    >
      <motion.img
        src={photo}
        className='w-2/6 max-w-2/6 overflow-hidden rounded-md object-cover mr-16'
        whileHover={{ scale: 1.05 }}
      />
      <div className='text-left mt-4'>
        <h2 className='text-2xl mb-6'>{title}</h2>
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
