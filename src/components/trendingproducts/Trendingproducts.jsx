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

// Dummy product data
const products = [
    {
        id: 1,
        image: stool,
        category: "Furniture",
        price: "₦15,000",
        title: "Modern Wooden Stool",
        location: "Lagos, Ikeja",
        visits: "24 visits",
        premium: true
    },
    {
        id: 2,
        image: bootle,
        category: "Home",
        price: "₦8,500",
        title: "Insulated Water Bottle",
        location: "Abuja, Wuse",
        visits: "18 visits",
        premium: false
    },
    {
        id: 3,
        image: crocs,
        category: "Fashion",
        price: "₦12,000",
        title: "Comfortable Crocs",
        location: "Port Harcourt",
        visits: "32 visits",
        premium: true
    },
    {
        id: 4,
        image: watch,
        category: "Electronics",
        price: "₦25,000",
        title: "Smart Watch",
        location: "Lagos, Lekki",
        visits: "15 visits",
        premium: false
    },
    {
        id: 5,
        image: headphone,
        category: "Electronics",
        price: "₦18,000",
        title: "Wireless Headphones",
        location: "Kano",
        visits: "21 visits",
        premium: true
    },
    {
        id: 6,
        image: speaker,
        category: "Electronics",
        price: "₦22,000",
        title: "Bluetooth Speaker",
        location: "Enugu",
        visits: "12 visits",
        premium: false
    }
];

const TrendingProducts = () => {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="font-semibold text-[32px] leading-[131.8%] text-[#333333] mb-[60px]">All trending products</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 sm:px-6 lg:px-8 mx-auto">
                {products.map((product) => (
                    <Card className="w-full bg-[#FFFFFF] drop-shadow-md shadow-m overflow-hidden rounded-[30px] p-4 relative" key={product.id}>
                        {product.premium && (
                            <span className="absolute top-8 right-8 bg-[#FFFFFF] text-[#5F3AFB] font-bold px-2 py-1 rounded-full text-xs">
                                Premium Ad
                            </span>
                        )}

                        <img
                            src={product.image}
                            width={600}
                            height={400}
                            alt={product.title}
                            className="w-full aspect-[3/2] object-cover rounded-[30px]"
                        />
                        
                        <div className="py-1 space-y-2">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-[#5F3AFB]">{product.category}</h3>
                                <div className="text-2xl font-bold text-[#000000]">{product.price}</div>
                            </div>
                            <p className="text-[#000000] font-[600] text-xl">{product.title}</p>
                            <div className="bg-[#F0F0F0] rounded-[20px] p-4 font-[700]">
                                <div className="text-sm text-[#5F3AFB] flex items-center gap-2 mb-2">
                                    <FaLocationDot className="w-4 h-4" />
                                    {product.location}
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-black">{product.visits}</p>
                                    <Link 
                                        to={`/product-details/${product.id}`}
                                        state={{ product }}
                                        className="bg-[#5F3AFB] w-[80px] sm:w-[100px] text-white px py-2 rounded-[100px] text-[14px] lg:text-[16px] text-center"
                                    >
                                        Preview
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="flex items-center justify-center mt-8 mb-10 sm:mt-12 sm:mb-16">
                <Link
                    className="px-4 py-3 md:text-[20px] sm:h-[69px] rounded-[12px] text-[#333333] bg-transparent flex items-center gap-2 border-[1px] border-[#5F3AFB]"
                    to="/products"
                >
                    View all products <span className="ml-2"><LuShoppingCart /></span>
                </Link>
            </div>
        </section>
    );
};

export default TrendingProducts;