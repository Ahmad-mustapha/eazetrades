import React from 'react';
import stool from '../../assets/stool.png';
import bootle from '../../assets/bottle.png';
import crocs from '../../assets/crocs.png';
import watch from '../../assets/watch.png';
import headphone from '../../assets/headphone.png';
import speaker from '../../assets/speaker.png';
import { Card } from "@/components/ui/card";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Filterbutton } from '@/components/randoms/Filterbutton';

const productData = [
    {
        id: 1,
        image: stool,
        category: "Furniture",
        price: 20000,
        title: "Modern Stool",
        location: "Lagos, Ikeja",
        visits: 16,
        isPremium: true
    },
    {
        id: 2,
        image: bootle,
        category: "Accessories",
        price: 15000,
        title: "Stylish Water Bottle",
        location: "Abuja, Wuse",
        visits: 24,
        isPremium: false
    },
    {
        id: 3,
        image: crocs,
        category: "Fashion",
        price: 18000,
        title: "High Quality Crocs",
        location: "Port Harcourt",
        visits: 32,
        isPremium: true
    },
    {
        id: 4,
        image: watch,
        category: "Accessories",
        price: 35000,
        title: "Luxury Watch",
        location: "Lagos, Lekki",
        visits: 8,
        isPremium: false
    },
    {
        id: 5,
        image: headphone,
        category: "Electronics",
        price: 25000,
        title: "Wireless Headphones",
        location: "Ibadan",
        visits: 45,
        isPremium: true
    },
    {
        id: 6,
        image: speaker,
        category: "Electronics",
        price: 30000,
        title: "Bluetooth Speaker",
        location: "Enugu",
        visits: 12,
        isPremium: false
    }
];

export const Products = ({category}) => {
    const location = useLocation();
    
    // Get the parent category (fashion/electronics/etc.) from the path
    const getParentCategory = () => {
        const pathSegments = location.pathname.split('/').filter(segment => segment);
        
        // If we're at /products/fashion/jeans, return 'fashion'
        if (pathSegments.length >= 2 && pathSegments[0] === 'products') {
            return pathSegments[1]; // Returns 'fashion' or 'electronics' etc.
        }
        return category; // Fallback to the passed category prop
    };

    const parentCategory = getParentCategory();

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#f7f7f7]">
            {/* Breadcrumb Navigation */}
            {location.pathname.includes('products') && (
                <div className='flex items-center gap-4'>
                    <p className='flex items-center gap-4'>
                        <Link to='/' className='hover:underline'>Home</Link> 
                        <MdKeyboardDoubleArrowRight className='text-[1.5rem] font-[300]' />
                    </p>
                    <p className='flex items-center gap-4'>
                        <Link to='/products' className='hover:underline'>Products</Link>
                        <MdKeyboardDoubleArrowRight className='text-[1.5rem] font-[300]' />
                    </p>
                    <p className='capitalize'>{parentCategory}</p>
                </div>
            )}

            {/* Page Title */}
            <div className='relative flex items-center justify-between'>
                <h2 className="font-[500] text-[32px] lg:text-[40px] xl:text-[48px] text-[#333333] mb-[45px] mt-[20px] capitalize">
                    {parentCategory || 'Products'}
                </h2>
                <Filterbutton />
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 mx-auto">
                {productData
                    .filter(product => !parentCategory || product.category.toLowerCase() === parentCategory.toLowerCase())
                    .map((product) => (
                        <Card className="w-full bg-[#FFFFFF] drop-shadow-md shadow-m overflow-hidden rounded-[30px] p-3" key={product.id}>
                            {product.isPremium && (
                                <span className="absolute top-4 right-4 bg-[#FFFFFF] text-[#5F3AFB] font-bold px-2 py-1 rounded-full text-[10px]">
                                    Premium Ad
                                </span>
                            )}
                            <img
                                src={product.image}
                                width={600}
                                height={400}
                                alt={product.title}
                                className="w-full aspect-[3/2] object-cover rounded-[25px]"
                            />
                            <div className="py-3 space-y-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-[#5F3AFB]">{product.category}</h3>
                                    <div className="text-2xl font-bold text-[#000000]">₦{product.price.toLocaleString()}</div>
                                </div>
                                <p className="text-[#000000] font-[600] text-xl">{product.title}</p>
                                <div className="bg-[#F0F0F0] rounded-[20px] p-3 font-[700]">
                                    <div className="text-sm text-[#5F3AFB] flex items-center gap-2 mb-2">
                                        <FaLocationDot className="w-4 h-4" />
                                        {product.location}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-black">{product.visits} visits</p>
                                        <Link 
                                            to={`/product-details/${product.id}`}
                                            state={{ product }}
                                            className="bg-[#5F3AFB] w-[70px] sm:w-[90px] text-white px py-1 rounded-[100px] text-[12px] lg:text-[14px] text-center hover:bg-[#4a2ac4] transition-colors"
                                        >
                                            Preview
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))
                }
            </div>
        </section>
    );
};