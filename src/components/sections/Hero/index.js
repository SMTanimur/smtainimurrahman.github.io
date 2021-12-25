import React from 'react';

import Link from 'next/link';
import ScrollToTop from 'src/hooks/ScrollToTop';

const Hero = () => {
  const resumeURL =
    'https://drive.google.com/drive/u/0/folders/10zOY41obIDEN_OGUDUh4LVy6_u4PnY1C';
  const profilePhoto = 'https://avatars.githubusercontent.com/u/80884335?v=4';

  return (
    <section
      className='max-w-6xl container mx-auto mt-12 md:mt-32  min-h-[70vh] px-8'
      id='Hero'
    >
      <div className='flex justify-between flex-col-reverse md:flex-row items-center'>
        <div className='md:text-left leading-[1.3] pr-4 my-14 text-center'>
          <h4 className='flex items-center justify-center md:justify-start text-[#98b4d4] text-[1.05rem] '>
            <span className='pr-2 inline-block text-[2rem] animate-wiggle duration-300'>
              👋🏼
            </span>
            Hey there! My name is
          </h4>
          <h2 className='max-w-3xl text-[#e8e8e8] text-2xl sm:text-3xl lg:text-5xl mt-4'>
            S. M. Tanimur Rahman
          </h2>
          <h3 className='max-w-3xl text-2xl sm:text-3xl lg:text-5xl text-[#adefd1ff] my-4'>
            I build beautiful things for the web!
          </h3>
          <p className='max-w-[550px] text-[#dcdcdc] text-sm md:text-lg'>
            I'm a freshly graduated{' '}
            <span className='text-[#98b4d4]'>Full-Stack Developer</span> who
            builds interfaces for users to have great experiences, trying to
            improve himself on the web and enjoys it.
          </p>
          <button className='mt-10 bg-transparent  font-semibold cursor-pointer leading-[1]'>
            <Link href={resumeURL}>
              <a className='text-[#dcdcdc] block py-5 px-7 hover:bg-[#272d3d] shadow-md border-2 border-[#adefd1ff] rounded-md'>
                Check out my resume!
              </a>
            </Link>
          </button>
        </div>
        <div className='relative shadow-2xl group cursor-pointer max-w-[200px] md:max-w-[300px]'>
          <div className='z-0 rounded-lg absolute w-full h-full top-7 sm:top-9 left-7 sm:left-9 border-4 border-[#adefd1ff] group-hover:border-[#B49A60] group-hover:top-6 group-hover:left-6 transition-all duration-200 ease-transition'></div>
          <div className='rounded-lg  overflow-hidden '>
            <img
              className='z-10 filter grayscale hover:grayscale-0 transition-all duration-500 ease-transition'
              src={profilePhoto}
              alt=''
            />
          </div>
        </div>

        <ScrollToTop />
      </div>
    </section>
  );
};
export default Hero;
