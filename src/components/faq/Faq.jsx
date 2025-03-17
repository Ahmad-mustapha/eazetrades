import React, { useState, useEffect } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { GoArrowUp } from "react-icons/go";
import { GoArrowDown } from 'react-icons/go';
// import Faqimage from '../../assets/faqimg.png'

export const Eachfaq = () =>{
const [ openFaq, setopenFaq ] = useState(Array(6).fill(false))

const questions = [
  {question: 'What is UX design?', answer : 'UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.'},
  {question: 'What is UX design?', answer : 'UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.'},
  {question: "What is UX design?", answer : 'UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.'},
  {question: 'What is UX design?', answer : 'UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.'},
]
const toggleFaq = (index) =>{
  setopenFaq(openFaq.map((isOpen, i) => (i === index ? !isOpen : isOpen)))
}

  return(
    <div 
      id='faq'
      className={`font-sans text-black`}>
     <ul>
        {questions.map((ques, index) => (
          <li key={index} 
          onClick={() => toggleFaq(index)}
          className=''>
            <div className='flex items-center justify-between pb-4 mt-8'>
              <p className='text-[28px] font-[600] text-[#333333]'>{ques.question}</p>
              <span>
                {!openFaq[index] ?
                  <GoArrowUp className='rounded-full border-[1px] border-black w-[35px] h-[35px] p-2' onClick={() => toggleFaq(index)}/> :
                  <GoArrowDown className='rounded-full border-[1px] border-black w-[35px] h-[35px] p-2'  onClick={() => toggleFaq(index)}/>
                  }
              </span>
            </div>
            <p 
              className={`text-[18px] transition-all duration-500 ease-in-out overflow-hidden ${openFaq[index] ? 'max-h-64 mt-4 mb-2 opacity-100' : 'max-h-0 opacity-0'}`}>{ques.answer}
            </p>
          </li>
        )) }
        
     </ul>
      {/* {console.log(openFaq)} */}
    </div>
  )
}

function Faq() {
  return (
    <div id='faqs' className='p-4 md:p-14 font-sans flex justify-between space-x-10 space-y-4 lg:flex-row flex-col overflow-x-hidden mt-10 bg-[#F9F7FF]'>
      <div className='2/4'><h2 className='text-[30px] md:text-[45px] font-[600] text-[#333333]'>Frequently asked question</h2></div>
      <div data-aos="fade-left" className='w-full md:w-4/6  lg:w-4/6'>
        <Eachfaq />
      </div>
    </div>
  )
}

export default Faq