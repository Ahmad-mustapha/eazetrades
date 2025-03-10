import React, { useState } from "react";
import { FiSearch } from "react-icons/fi"; // Import the search icon

const Searchbarnav = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to manage expansion on small screens

  return (
    <div className={`box flex items-center cursor-pointer rounded-full bg-white mr-18 lg:mr-0 ${isExpanded? 'bg-white': ''}`}>
      {/* Search Icon (Always Visible) */}
      <a href="#" className={`bg-[#5F3AFB] lg:bg-white p-3.5 px-3.5 rounded-full ${isExpanded ? 'bg-white': ''}`} onClick={() => setIsExpanded(!isExpanded)}>
        <FiSearch className={`text-[#] text-[1.3rem] ${isExpanded? 'text-slate-400': ''}`} />
      </a>

      {/* Input Field (Visible on md screens and above or when expanded on small screens) */}
      <div
        className={`input overflow-hidden transition-all duration-300 ${
            isExpanded ? "w-[250px] ml-2" : "w-0"
        } lg:w-[250px] lg:ml-2`}
        >
        <input
            type="text"
            placeholder="Search for product"
            className="w-full border-none outline-none"
        />
        </div>
    </div>
  );
};

export default Searchbarnav;