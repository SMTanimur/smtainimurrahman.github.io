
import React, { useState } from 'react';
import { HiMenuAlt2 } from 'react-icons/hi';
import { MdClose, MdContactSupport } from 'react-icons/md';
import { navLinks } from 'src/helpers';
import Link from 'next/link'

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="relative px-8">
    <header className="  sticky  top-0 w-full py-10 overflow-hidden ">
      <div className="max-w-6xl container mx-auto flex items-center">
        <nav className="">
          <div className="flex flex-row-reverse items-center z-40 ">
            <div className={'flex space-x-6 opacity-0 z-20 transition ease-in-out overflow-hidden -translate-x-4 duration-500 delay-150'+(show ? ' opacity-100 translate-x-8' : '')}>
              {navLinks.map((nav, i) => (
                <div key={i} className="ml-5">
                  <Link href={nav.url}>
                     <a className="text-white z-30 text-lg">{nav.name}</a>
                  </Link>
                </div>
              ))}
            </div>
            <button onClick={handleClick} className="text-2xl z-20">
              {show ? <MdClose color="white" /> : <HiMenuAlt2 color="white" />}
            </button>
          </div>
        </nav>
      </div>
    </header>
    </div>
  );
};

export default Navbar;