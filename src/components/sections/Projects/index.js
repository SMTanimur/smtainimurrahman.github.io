import React from 'react';
import { useQuery } from 'react-query';
import { RiArrowRightUpLine } from 'react-icons/ri';
import Fade from 'react-reveal/Fade';
import { getRepos } from 'src/api/api';
import ProjectCard from './ProjectCard';
import Link from 'next/link';



const Projects = () => {
  const { data, error, isLoading } = useQuery('repositories', getRepos);
  console.log(data)
  const ownerURL = 'https://github.com/MushfiqurRahmanTanim';
  const sortItems = (a, b) =>
    a.stargazers_count < b.stargazers_count ? 1 : -1;
  return (
    <section className='px-8 py-4' id='projects'>
      <div className='container mx-auto max-w-6xl flex-col items-center'>
        <div className='flex w-full items-center justify-between pb-10 '>
          <h2 className='text-2xl md:text-[2.5rem] text-[#98b4d4] pr-[1rem]'>
            Projects I've built
          </h2>
          <Link href={ownerURL}>
            <a className='flex items-center text-[#bcbdce] text-sm sm:text-lg'>
              See more
              <span className='text-xl pl-1'>
                <RiArrowRightUpLine />
              </span>
            </a>
          </Link>
        </div>
        <ul className='flex flex-wrap max-w-[100%]'>
          {isLoading && <p> Loading.. </p>}
          {error && <p>Projects couldn't loaded.</p>}
          {data
            ?.filter(
              x =>
                x.id === 401934279 ||
                x.id === 409057717 ||
                x.id === 398596013 ||
                x.id === 405542615 ||
                x.id === 428201103 ||
                x.id === 406384870
            )
            .sort(sortItems)
            .map(repos => (
              <Fade bottom key={repos.id}>
                <li className='w-[100%] sm:w-[47%] bg- ml-4 my-5 p-8 flex justify-start  items-center border border-[#9a9bb6] rounded-md hover:bg-[#28243F] shadow-md relative'>
                  <ProjectCard repos={repos} />
                </li>
              </Fade>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
