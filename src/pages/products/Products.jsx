import React from 'react';
import stool from '../../assets/stool.png';
import bootle from '../../assets/bottle.png';
import crocs from '../../assets/crocs.png';
import watch from '../../assets/watch.png';
import headphone from '../../assets/headphone.png';
import speaker from '../../assets/speaker.png';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FaLocationDot } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Filterbutton } from '@/components/randoms/Filterbutton';

const pics = [stool, bootle, crocs, watch, headphone, speaker];

export const Products = ({category}) => {
    console.log(category);
    
    const location = useLocation()
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
            {location.pathname.includes(category) &&(
                <div className='flex items-center gap-4'>
                    <p className='flex items-center gap-4'><Link to='/'>Home</Link> <MdKeyboardDoubleArrowRight className='text-[1.5rem] font-[300]' /></p>
                    <p className='flex items-center gap-4'>Category <MdKeyboardDoubleArrowRight className='text-[1.5rem] font-[300]' /></p>
                    <p className='capitalize'>{category}</p>
                </div>
            )}
            <div>
                <h2 className="font-[500] text-[32px] lg:text-[40px] xl:text-[48px] text-[#333333] mb-[45px] mt-[20px] capitalize">{category}</h2>
                <Filterbutton />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 mx-auto">
                {pics.map((p, i) => (
                    <Card className="w-full bg-[#FFFFFF] drop-shadow-md shadow-m overflow-hidden rounded-[30px] p-4" key={i}>
                        {/* <div className="relative p-4"> */}
                            {/* Badge for Premium Ad */}
                            <span className="absolute top-8 right-8 bg-[#FFFFFF] text-[#5F3AFB] font-bold px-2 py-1 rounded-full text-xs">
                                Premium Ad
                            </span>
                            <img
                                src={p}
                                width={600}
                                height={400}
                                alt={`PIC ${i + 1}`}
                                className="w-full aspect-[3/2] object-cover rounded-[30px]"
                            />
                        {/* </div> */}
                        <div className="py-4 space-y-2">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-[#5F3AFB]">Fashion</h3>
                                <div className="text-2xl font-bold text-[#000000]">₦20,000</div>
                            </div>
                            <p className="text-[#000000] font-[600] text-xl">High Quality Crocs</p>
                            <div className="bg-[#F0F0F0] rounded-[20px] p-4 font-[700]">
                                <div className="text-sm text-[#5F3AFB] flex items-center gap-2 mb-2">
                                    <FaLocationDot className="w-4 h-4" />
                                    Lagos, Ikeja
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-black">16 visits</p>
                                    <Link className="bg-[#5F3AFB] w-[80px] sm:w-[100px] text-white px py-2 rounded-[100px] text-[14px] lg:text-[16px] text-center">Preview</Link>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
};

// export default Products;