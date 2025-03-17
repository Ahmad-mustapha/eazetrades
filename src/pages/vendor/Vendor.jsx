import './vendor.css'
import Store from '../../assets/storeimg.png'
import Productimg from '../../assets/product.png'
import Serviceimg from '../../assets/services.png'
import Profileimg from '../../assets/profile.png'
import Instaimg from '../../assets/instaimg.png'
import Ximg from '../../assets/ximg.png'
import Gmailimg from '../../assets/gmailimg.png'

import { Products } from '../products/Products'
import { Services } from '../services/Services'

const eachserviceData = [
  { id: 1, title: 'Product', numOremail: '9', Image: Productimg },
  { id: 2, title: 'Services', numOremail: '9', Image: Serviceimg },
  { id: 3, title: 'Profile visits', numOremail: '9', Image: Profileimg },
  { id: 4, title: 'Instagram', numOremail: '9', Image: Instaimg },
  { id: 5, title: 'X', numOremail: '9', Image: Ximg },
  { id: 6, title: 'Gmail', numOremail: '9', Image: Gmailimg },
]

export const Eachservice = () => (
  <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 md:p-10 lg:p-20'>
    {eachserviceData.map((item, index) => (
      <li key={index} className='flex flex-col items-center justify-center bg-white py-6 w-full max-w-[330px] mx-auto rounded-[10px]'>
        <div><img className='w-full' src={item.Image} alt={item.title} /></div>
        <p className='text-lg font-medium mt-2'>{item.title}</p>
        <p className='text-lg font-[500]'>{item.numOremail}</p>
      </li>
    ))}
  </ul>
)

const Vendor = () => {
  return (
    <div className='bg-[#F9F7FF]'>
      <div className='vendor flex flex-col gap-2 items-center justify-center text-[#fff] py-10 px-4 sm:px-6 lg:px-8'>
        <div className='w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40'><img src={Store} alt="Store" className='w-full h-full object-cover' /></div>
        <h1 className='text-[30px] lg:text-[45px] font-[500] mt-4'>James Store</h1>
        <p className='text-[20px] lg:text-[30px]'>Lagos, Nigeria</p>
        <p className='text-[20px] lg:text-[30px] font-[500] text-center mt-4'>08184383828 | Registered - Mar 25, 2024</p>
        <p className='text-[20px] lg:text-[28px] text-center mt-6 font-[300]'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, in deleniti. Magni eos
        </p>
      </div>
      <div className='services py-10 border-y-[2px] border-[#ccc]'>
        <Eachservice />
      </div>
      <section>
        <Products />
      </section>
      <section>
        <Services />
      </section>
    </div>
  )
}

export default Vendor