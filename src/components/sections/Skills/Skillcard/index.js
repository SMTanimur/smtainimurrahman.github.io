import React from 'react';

const SkillCard = ({ items }) => {
  return (
    <div className='w-[130px] sm:w-[180px] h-[50px] text-lg flex justify-center items-center cursor-pointer rounded-md border border-[#70719b] text-gray-400 hover:bg-[#212635] transition duration-150'>
      {items.icon} <span className='ml-2'> {items.name} </span>
    </div>
  );
};

export default SkillCard;
