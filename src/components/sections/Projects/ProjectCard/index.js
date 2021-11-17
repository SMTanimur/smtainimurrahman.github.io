import React from 'react';

import { RiGithubLine } from 'react-icons/ri';
import { BiGitRepoForked, BiStar } from 'react-icons/bi';
import { BsCircleFill, BsBoxArrowUpRight } from 'react-icons/bs';
import Link from 'next/link'

const ProjectCard = ({ repos }) => {
  console.log(repos)
  return (
    <>
      <Link
        href={repos?.homepage?repos?.homepage : repos?.html_url}
      >
      <a className="min-h-[135px] relative">
        <h3 className="pb-[1rem] inline-flex items-center text-base sm:text-lg text-white">
          {repos?.name}
          <span className="ml-2 text-sm">
            <BsBoxArrowUpRight />
          </span>
        </h3>
        <p className="text-[#C3C1C3] pb-12 text-sm leading-6">{repos?.description}</p>
        <div className="flex space-x-3 text-[#747389]">
          <p className="flex items-center text-sm ">
            <span className="mr-1">
            <BsCircleFill fill="#f1e05a"/>
            </span>
            {repos?.language}
          </p>
          <span className="flex items-center">
            <BiStar />
            {repos?.stargazers_count}
          </span>
          <span className="flex items-center">
            <BiGitRepoForked />
            {repos?.forks_count}
          </span>
        </div>
        </a>
      </Link>
      <Link className="relative" href={repos.html_url}>
      <a className="absolute right-8 bottom-8">
        <span className="text-xl text-gray-300">
          <RiGithubLine />
        </span>
        </a>
      </Link>
    </>
  );
};

export default ProjectCard;
