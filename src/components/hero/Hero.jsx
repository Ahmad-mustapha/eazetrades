import './hero.css'
import { FiSearch } from "react-icons/fi";


export const Searchbar = () =>(
  <div className='bg-white absolute rounded-lg px-8 py-6 w-5/6 shadow-lg z-20'>
    <input 
    className='w-full px-4 py-4 border border-gray-300 rounded-[100px] focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm'
    type="text" />
    <span ><FiSearch className='bg-[#5F3AFB] rounded-full w-11 h-11 p-2 absolute right-10 top-[30px] text-white'/></span>
  </div>
)


const Hero = () => {
  return (
    <section className="hero bg-[#EEEAFF] relative">
      <div className="w-full sm:w-5/6 md:w-3/6 lg:w-4/6 flex flex-col gap-6 pl-0 sm:pl-6 lg:pl-10">
        <h2 className="font-[600] text-[45px] md:text-[50px] leading-[55px] text-[#333333]">Connecting <br /> sellers and buyers where convenience <br /> meet innovation</h2>
        <p className="text-[#696969] text-[25px]">World's largerst market place</p>
        <div className='w-full sm:w-[280px]'>
          <button className="bg-[#5F3AFB] w-full text-white px py-2 rounded-[100px] text-[16px] lg:text-[19px]">
            Get started
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero