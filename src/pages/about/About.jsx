import './about.css'
import Safety from '../../assets/safety.png'
import Satisfaction from '../../assets/satifactionimg.png'
import Discoveryimg from '../../assets/discoveryItems.png'
import Tailorimg from '../../assets/tailoredItems.png'
import { AiOutlineCheck } from "react-icons/ai";
import { Faq } from '@/components/imports';


const UniqueData = [
  {id: 1, title: 'Seller-to-buyer Delivery', detail: 'We do not hold possession of the products. Instead, we pick up the item from the seller and deliver it directly to you.'},
  {id: 2, title: 'Secure transactions', detail: 'You confirm the product before making payment. Once satisfied, you pay the seller, and our rider confirms that the seller has received the payment before leaving.'},
  {id: 3, title: 'Enhanced safety:', detail: 'By handling the deliveries ourselves, we mitigate the risks associated with in-person pickups, such as theft and fraudulent transactions.'},
]

export const WhatSetUsApart = () =>(
  <ul className='flex justify-center md:justify-start gap-4 mt-12 flex-wrap md:flex-nowrap'>
    {
      UniqueData.map((item, index)=>(
        <li key={index} className='flex flex-col gap-4 px-4 py-7 border-[1px] border-[#C4C4C4] w-[400px] hover:bg-[#B2C8F2]'>
          <span className=''><AiOutlineCheck className='text-white text-[35px] bg-[#5F3AFB] font-[600] mb-6 w-[60px] h-[60px] p-2 rounded-full'/></span>
          <p className='text-[30px] font-[500]'>{item.title}</p>
          <p className='text-[24px] font-[300]'>{item.detail}</p>
        </li>
      ))
    }
  </ul>
)


const About = () => {
  return (
    <div>
      <div className='abouthero flex items-center justify-center text-white text-[60px] font-[600]'>About Us</div>
      <section className='bg-[#F9F7FF] flex gap-8 p-4 md:p-8 lg:p-14 flex-wrap md:flex-nowrap'>
        <div className='w-full md:w-3/6 flex flex-col gap-4'>
          <h1 className='text-[40px] md:text-[47px] lg:text-[60px] font-[500]'>Our commitment to safety and satisfaction</h1>
          <p className='text-[20px] fpnt-[300] text-[#333333] leading-8 lg:leading-10'>At EAZETRADES, we understand the security concerns that come with online shopping. With our end-to-end delivery service, you can shop with confidence, knowing that your purchases are handled with care and delivered securely. Our process ensures that every transaction is smooth and worry-free, providing peace of mind to both buyers and sellers.</p>
        </div>
        <div className='w-full md:w-3/6'><img className='w-full' src={Safety} alt="" /></div>
      </section>
      <section className='bg-[#F9F7FF] flex items-center flex-col justify-center'>
        <div className='flex items-center flex-col justify-center gap-4 mt-10'>
          <p className='font-[500] text-[28px] md:text-[45px] md:leading-[60px] text-center'>Leveraging artificial intelligence for <br /> a personalized experience</p>
          <p className='text-center font-[300] text-[16px] md:text-[20px]'>We are excited to integrate Artificial Intelligence into our platform to enhance your <br /> shopping journey.</p>
        </div>
        <div className='flex justify-center my-10 flex-wrap md:flex-nowrap p-4'>
          <div className='w-full md:w-2/6'><img className='w-full' src={Tailorimg} alt="" /></div>
          <div className='w-full md:w-3/6'><img className='w-full' src={Discoveryimg} alt="" /></div>
        </div>
      </section>
      <section className='p-4 md:p-8 lg:p-14 bg-[#F9F7FF]'>
        <div className='flex'>
          <p className='text-[] md:text-[46px] font-[500] w-full md:w-3/6'>What sets us apart</p>
          <p className='font-[300] text-[] md:text-[20px] md:leading-9 w-full md:w-3/6'>Our innovative related searches feature ensures you discover new products based on your browsing history and preferences. Whether you're looking for the latest gadgets, fashion trends, or home essentials, our AI-powered recommendations help you find exactly what you're searching for.</p>
        </div>
        <WhatSetUsApart />
      </section>
      <section className='customer py-24 px-10 text-white'>
        <p className='text-center text-[26px] md:text-[45px] font-[600]'>Customer Satisfaction:</p>
        <p className='text-[20px] md:text-[26px] font-[400] mt-16'>Your satisfaction is our top priority.</p>
        <p className='text-[20px] md:text-[26px] font-[400] '>We strive to provide excellent customer service and ensure that <br /> every purchase meets your expectations.</p>
      </section>
      <section>
      <Faq />
      </section>
    </div>
  )
}

export default About