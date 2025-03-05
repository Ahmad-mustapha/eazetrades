import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import gif1 from "../../assets/videos/carbiketransform.gif";
import gif2 from "../../assets/videos/digitalmarketing.gif";
import gif3 from "../../assets/videos/photographer.jpeg.jpg";
import gif4 from "../../assets/videos/gadgets.gif";
import gif5 from "../../assets/videos/december.gif";
import gif6 from "../../assets/videos/pup.gif";
import gif7 from "../../assets/videos/robot.gif";
import gif8 from "../../assets/videos/teacher.gif";
import gif9 from "../../assets/videos/theaglad.gif";

const gifs = [gif1, gif2, gif3, gif4, gif5, gif6, gif7, gif8, gif9];
const text = [
  "Sport, Art",
  "Health",
  "Animals",
  "Vehicle",
  "Fashion",
  "Pup",
  "SVG Robot",
  "Teacher Tips",
  "theaglad",
];

const Videoslider = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="-ml-1">
        {gifs.map((gif, index) => (
          <CarouselItem key={index} className="pl-2 basis-10/12 lg:basis-1/5">
            <div className="">
              <Card className="bg-[#F0F4FF] rounded-[8px] h-[250px] md:h-[280px] lg:h-[300px] flex flex-col justify-between border-none">
                <div className="flex items-center justify-center p-4 md:p-6">
                  <img
                    src={gif}
                    className="aspect-[3/2] object-cover w-[143px] md:w-[177px]"
                    alt="img"
                  />
                </div>
                <div className="px-2 pb-2 md:p-4 md:space-y-2">
                  <div className="flex items-center justify-center">
                    <h3 className="text-[#333333] font-medium text-xl lg:text-2xl whitespace-nowrap text-center">
                      {text[index]}
                    </h3>
                  </div>
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
  );
};

export default Videoslider;