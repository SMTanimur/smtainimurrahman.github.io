import React from 'react';

import { FiArrowDown } from 'react-icons/fi';
import { socialMedia } from 'src/helpers';
import SocialMedia from './SocialMedia';

const Footer = () => {
  return (
    <section className="relative py-8 px-7 ">
      <div className="max-w-6xl container mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="">
        <p className="flex text-[#9798af] items-center text-sm py-5">
          Don't forget to follow me
          <span className="pl-3">
            <FiArrowDown />
          </span>
        </p>
        <ul className="flex space-x-6 text-2xl text-white">
          {socialMedia.map((follows, i) => (
            <li key={i}>
              <SocialMedia follows={follows} />
            </li>
          ))}
        </ul>
        </div>
        <h3 className="text-sm md:text-xl text-white font-semibold text-center mt-5 md:mt-0">Designed by <span className="text-[#ADEFD1]">Ogulcan Eristi</span>  & Developed by <span className="text-[#ADEFD1]">Tanim</span></h3>
      </div>
    </section>
  );
};

export default Footer;

