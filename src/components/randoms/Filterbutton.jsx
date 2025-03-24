import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { IoFilterSharp } from "react-icons/io5";

const FilterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed right-0 -bottom-10 z-50 py-15 px-6 bg-white w-[500px] h-[400px] flex flex-col gap-4 overflow-y-scroll text-[#333333]">
      <RxCross2 onClick={onClose} className='absolute top-4 right-4 text-[1.5rem]'/>
      <p className='text-[25px]'>Category</p>
      <div className='flex items-center flex-wrap gap-2'>
        <p className='border-[1px] border-[#333333] rounded-xl p-2 px-3'>Fashion</p>
        <p className='border-[1px] border-[#333333] rounded-xl p-2 px-3'>Sport,art,outdoors</p>
        <p className='border-[1px] border-[#333333] rounded-xl p-2 px-3'>Pet</p>
        <p className='border-[1px] border-[#333333] rounded-xl p-2 px-3'>Health and lifestyle</p>
      </div>
      <p className='text-[25px]'>Fashion by price</p>
      <div className='flex items-center gap-2'>
        <p className='border-[1px] border-[#333333] rounded-xl p-2 px-3'>Clothes</p>
        <p className='border-[1px] border-[#333333] rounded-xl p-2 px-3'>Shoes</p>
        <p className='border-[1px] border-[#333333] rounded-xl p-2 px-3'>Glasses</p>
        <p className='border-[1px] border-[#333333] rounded-xl p-2 px-3'>Accessories</p>
      </div>
      <div>
        <p className='text-[25px]'>Filter by price</p>
        <div>bene</div>
        <button className='bg-[#5F3AFB] p-1 px-4 text-white rounded-[100px]'>Filter</button>
      </div>
      <div>
        <p>Color</p>
        <div className='flex items-center gap-3 color mt-2'>
          <span className='bg-red-500'></span><span className='bg-black'></span><span className='bg-green-500'></span>
        </div>
      </div>
      <p className='text-[25px]'>Sizes</p>
      <div className='flex items-center gap-2'>
        <p className='border-[1px] border-[#333333] rounded-xl p-2 px-3'>Size 7</p>
        <p className='border-[1px] border-[#333333] rounded-xl p-2 px-3'>Size 6</p>
        <p className='border-[1px] border-[#333333] rounded-xl p-2 px-3'>Size 8</p>
        <p className='border-[1px] border-[#333333] rounded-xl p-2 px-3'>Size 10</p>
      </div>
    </div>
  );
};

export const Filterbutton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='relative text-[20px] flex'>
      {/* Filter Button */}
      <button
        onClick={() => setIsModalOpen(!isModalOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-[#F2F2F2] text-[#696969] rounded-md"
      >
        Filter
        <IoFilterSharp />
      </button>

      {/* Filter Modal */}
      <FilterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
