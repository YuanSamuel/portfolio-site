import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
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
          photo='./dev_image.svg'
          title='Personal Portfolio'
          description='Contriubted to open-sourced personal portfolio template.'
          tech={['Jekyll', 'HTML', 'SCSS', 'Static Site']}
          links={[
            {
              type: 'GitHub',
              link: 'https://github.com/MLH-Fellowship/portfolio-template',
            },
            {
              type: 'Launch',
              link: 'https://mlh-fellowship.github.io/portfolio-template',
            },
          ]}
        ></ProjectDiv>
        <ProjectDiv
          photo='./dev_image.svg'
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
          photo='./dev_image.svg'
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
      <p key={name + index} className='tech-name'>
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
      className='w-4/5 rounded-md flex flex-row relative mt-4 mb-4 border'
      variants={item}
      initial='hidden'
      animate={controls}
    >
      <motion.img
        src={photo}
        className='w-2/5 overflow-hidden rounded-md object-cover'
        whileHover={{ scale: 1.05 }}
      />
      <div className='project-info'>
        <h2 className='project-title'>{title}</h2>
        <p className='project-description'>{description}</p>
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
  return <div className='project-tech'>{children}</div>;
}

function ProjectLinks({ children }) {
  return <div className='project-links'>{children}</div>;
}

function ProjectLink({ type, link }) {
  function getIcon() {
    if (type === 'GitHub') {
      return GitHubLogo;
    } else if (type === 'Launch') {
      return LaunchIcon;
    }
  }

  return <div className='project-link'></div>;
}
