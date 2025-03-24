import { useState } from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md"
import { Link } from "react-router-dom"
import Seller from '../../assets/seller.jpg'
import { FaRegStar } from "react-icons/fa";
import { TbDotsVertical } from "react-icons/tb";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { IoMdMic } from "react-icons/io";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { Messagemenu } from "./Messagemenu";

const Message = () => {
  const [messageMenu, setMessageMenu] = useState(false)

  const handleMessageMenu = () =>(
    setMessageMenu(!messageMenu)
  )

  return (
    <div className='py-12 px-4 sm:px-6 lg:px-8 bg-[#F9F7FF] text-[#333]'>
      <div className="text-xl"><Link className='flex items-center'><MdKeyboardDoubleArrowLeft /> Go back</Link></div>
      <header className="flex items-center justify-between mt-10 relative">
        <div className="flex items-center gap-6">
          <div className="bg-slate-300 rounded-full w-[60px] h-[60px] md:w-[100px] md:h-[100px]"><img className="w-full h-full object-cover rounded-full" src={Seller} alt="" /></div>
          <div>
            <p className="md:text-[30px]">Name of Seller</p>
            <p className="text-[20px] text-[#979797]">Online</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <FaRegStar className="text-[30px]"/>
          <button>
            <TbDotsVertical 
            onClick={handleMessageMenu}
            className="text-[30px]"/>
          </button>
        </div>
        {messageMenu && (
          <Messagemenu />
        )}
      </header>
      <main className="mt-20">
        <div className="flex items-end justify-end gap-2">
          <p className="w-3/6 bg-[#5F3AFB] p-4 rounded-l-xl rounded-tr-xl">Hi Shammah. I want to buy the purple speaker that I saw on your website profile but I have a couple of questions: How long has the speaker been, the life span and all???</p>
          <div className="bg-slate-300 rounded-full w-[40px] h-[40px]"><img className="w-full h-full object-cover rounded-full" src={Seller} alt="" /></div>
        </div>
        <div className="flex items-end justify-start gap-2 mt-10">
          <p className="w-3/6 bg-[#fff] p-4 rounded-l-xl rounded-tr-xl">Hi Shammah. I want to buy the purple speaker that I saw on your website profile but I have a couple of questions: How long has the speaker been, the life span and all???</p>
          <div className="bg-slate-300 rounded-full w-[40px] h-[40px]"><img className="w-full h-full object-cover rounded-full" src={Seller} alt="" /></div>
        </div>

        <form action="">
          <div className="flex items-center justify-between gap-4 mt-18 p-5 md:p-7 bg-[#EFEBFF] border-[2px] border-[#D9D9D9]">
            <div className="flex items-center gap-4">
            <button><AiOutlinePlusCircle className="text-[20px] xl:text-[22px]"/></button>
            <button><MdOutlineEmojiEmotions className="text-[20px] xl:text-[22px]"/></button>
            </div>
            <div className="w-full relative">
              <input 
              className="w-full rounded-[100px] p-2 px-10 bg-[#ddd]"
              type="text" />
              <button><IoMdMic className="text-[22px] absolute right-2 top-2"/></button>
              <button><RxLetterCaseCapitalize className="text-[22px] absolute left-2 top-2"/></button>
            </div>
            <div>
              <button className="bg-[#5F3AFB] p-2 rounded-full flex items-center justify-between"><FiSend className="text-[38px] text-white"/></button>
            </div>
          </div>
        </form>
      </main>
    </div>
  )
}

export default Message