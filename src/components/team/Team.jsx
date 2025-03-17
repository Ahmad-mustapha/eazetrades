import React, { useState } from 'react';
import Member1 from '../../assets/member1.png';
import './team.css';

const Eachmemberdata = [
  { id: 1, name: 'Bene', role: 'Frontend Dev' },
  { id: 2, name: 'Bene', role: 'Frontend Dev' },
  { id: 3, name: 'Bene', role: 'Frontend Dev' },
  { id: 4, name: 'Bene', role: 'Frontend Dev' },
  { id: 5, name: 'Bene', role: 'Frontend Dev' },
  { id: 6, name: 'Bene', role: 'Frontend Dev' },
];

export const Eachmember = () => {
  const [expandedIndex, setExpandedIndex] = useState(0); // Default: first image is expanded

  const handleClick = (index) => {
    setExpandedIndex(index); // Set the clicked image as expanded
  };

  return (
    <ul className='slidercontainer'>
      {Eachmemberdata.map((member, index) => (
        <li
          className={`h-full relative ${index === expandedIndex ? 'expanded' : ''}`} // Apply 'expanded' class to the clicked image
          key={index}
          onClick={() => handleClick(index)} // Add click event
        >
          <img className='h-full' src={Member1} alt={member.name} />
          <p className='flex flex-col gap-2 absolute bottom-2 left-4 text-white'>
            <span className='font-[700] text-[18px] md:text-[24px]'>{member.name}</span>
            <span className='font-[500]'>{member.role}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};

const Team = () => {
  return (
    <div className='p-4 md:p-14'>
      <h2 className='text-[#4255FF] font-[600] text-[32px] md:text-[45px]'>MEET THE TEAM</h2>
      <p className='text-[#333333] text-[14px] md:text-[18px] mt-6 leading-8'>
        Lorem ipsum dolor sit amet consectetur. Interdum cursus ut morbi malesuada lorem odio enim. Imperdiet mauris iaculis velit mauris. 
      </p>
      <p className='text-[#333333] text-[18px] leading-8'>Consequat quam neque maecenas nisi odio sed auctor etiam morbi. Suspendisse massa vitae platea velit id faucibus orci augue condimentum. Lorem cursus tortor enim risus fringilla in purus. Aliquam quis aliquet malesuada risus.</p>
      <div className=''>
        <Eachmember />
      </div>
    </div>
  );
};

export default Team;