import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTop = ({ title }) => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.pageYOffset > 800 ? setShowScroll(true) : setShowScroll(false);
    });
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    showScroll && (
      <button className="flex fixed right-[3%] bottom-[3%]  bg-[#181B27] border-2 border-white h-[50px] w-[50px] justify-center items-center rounded-full text-xl text-gray-50 cursor-pointer z-[40]" onClick={scrollTop}>
        <FiArrowUp />
      </button>
    
    )
  );
};

export default ScrollToTop;