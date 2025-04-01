import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import camera from "../../assets/camera.png"; // Update the path as needed
import shoe from "../../assets/shoe.jpg"; // Update the path as needed
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

// Dummy product data
const products = [
    {
        id: 1,
        image: camera,
        category: "Electronics",
        price: "₦20,000",
        title: "Professional DSLR Camera",
        location: "Lagos, Ikeja",
        visits: "16 visits"
    },
    {
        id: 2,
        image: shoe,
        category: "Fashion",
        price: "₦15,000",
        title: "High Quality Crocs",
        location: "Abuja, Wuse",
        visits: "24 visits"
    },
    {
        id: 3,
        image: camera,
        category: "Electronics",
        price: "₦25,000",
        title: "Compact Digital Camera",
        location: "Port Harcourt",
        visits: "8 visits"
    },
    {
        id: 4,
        image: shoe,
        category: "Fashion",
        price: "₦18,000",
        title: "Premium Sneakers",
        location: "Lagos, Lekki",
        visits: "32 visits"
    },
    {
        id: 5,
        image: camera,
        category: "Electronics",
        price: "₦30,000",
        title: "Mirrorless Camera",
        location: "Kano",
        visits: "12 visits"
    },
    {
        id: 6,
        image: shoe,
        category: "Fashion",
        price: "₦12,000",
        title: "Comfortable Sandals",
        location: "Enugu",
        visits: "19 visits"
    },
    {
        id: 7,
        image: camera,
        category: "Electronics",
        price: "₦22,000",
        title: "Action Camera",
        location: "Lagos, Victoria Island",
        visits: "14 visits"
    },
    {
        id: 8,
        image: shoe,
        category: "Fashion",
        price: "₦17,500",
        title: "Designer Loafers",
        location: "Ibadan",
        visits: "21 visits"
    },
    {
        id: 9,
        image: camera,
        category: "Electronics",
        price: "₦28,000",
        title: "Instant Camera",
        location: "Calabar",
        visits: "7 visits"
    }
];

const Relatedsearch = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );
    return (
        <section className="my-[50px] md::my-[100px]">
            {/* <div className="text-center">
                <h1 className="font-semibold text-[32px] md:text-5xl mb-10 text-[#000000]">Related Searches</h1>
            </div> */}
            <div className="mt-0">
                <Carousel
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    opts={{
                        align: "start",
                        slidesToScroll: 4
                    }}
                    >
                    <CarouselContent className="flex justify-start items-center p-6 ml-0">
                        {products.map((product) => (
                            <CarouselItem key={product.id} className="pl-4 basis-full sm:basis-full md:basis-1/2 lg:basis-1/4">
                                <div className="p-1">
                                    <Card className="w-full max-w-sm bg-[#FFFFFF] drop-shadow-md shadow-m overflow-hidden rounded-[45px] px-4">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full aspect-[3/2] object-cover rounded-[45px]"
                                        />
                                        <div className="py space-y-2">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-lg font-semibold text-[#5F3AFB]">{product.category}</h3>
                                                <div className="text-2xl font-bold text-[#000000]">{product.price}</div>
                                            </div>
                                            <p className="text-[#000000] font-bold text-xl">{product.title}</p>
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
                                                        className="bg-[#5F3AFB] w-[100px] sm:w-[130px] text-white px py-2 rounded-[100px] text-[16px] lg:text-[19px] text-center"
                                                    >
                                                        Preview
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/* <CarouselPrevious />
                    <CarouselNext /> */}
                </Carousel>
            </div>
        </section>
    );
};

export default Relatedsearch;