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

const pic = [camera, shoe];
const repeatedPics = Array(9).fill(pic).map((_, i) => pic[i % pic.length]);

const Relatedsearch = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );
    return (
        <section className="my-[50px] md::my-[100px]">
            <div className="text-center">
                <h1 className="font-semibold text-[32px] md:text-5xl mb-10 text-[#000000]">Related Searches</h1>
            </div>
            <div className="mt-0">
                <Carousel
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent className="flex justify-center items-center p-6 -ml-1">
                        {repeatedPics.map((p, i) => (
                            <CarouselItem key={i} className="pl-2 basis-full sm:basis-full md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card className="w-full max-w-sm bg-[#FFFFFF] drop-shadow-md shadow-m overflow-hidden rounded-[45px] p-4">
                                        {/* <div className="p-4"> */}
                                            <img
                                                src={p}
                                                alt={`PIC ${i + 1}`}
                                                className="w-full aspect-[3/2] object-cover rounded-[45px]"
                                            />
                                        {/* </div> */}
                                        <div className="py-4 space-y-2">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-lg font-semibold text-[#5F3AFB]">Fashion</h3>
                                                <div className="text-2xl font-bold text-[#000000]">₦20,000</div>
                                            </div>
                                            <div className="">
                                                <p className="text-[#000000] font-bold text-xl">High Quality Crocs</p>
                                            </div>
                                            <div className="bg-[#F0F0F0] rounded-[20px] p-4 font-[700]">
                                                <div className="text-sm text-[#5F3AFB] flex items-center gap-2 mb-2">
                                                    <FaLocationDot className="w-4 h-4" />
                                                    Lagos, Ikeja
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <p className="text-sm text-black">16 visits</p>
                                                    <Link className="bg-[#5F3AFB] w-[100px] sm:w-[130px] text-white px py-2 rounded-[100px] text-[16px] lg:text-[19px] text-center">Preview</Link>
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