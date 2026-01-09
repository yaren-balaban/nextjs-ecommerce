import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export default function SliderShadcn() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
          <CarouselItem>
            <div className="flex">
              <Image 
                src={"/img/sliders/slider_1.webp"}
                width={1000}
                height={1000}
                alt="slider1"
                className="w-full h-auto"
              />
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="flex">
              <Image 
                src={"/img/sliders/slider_2.webp"}
                width={1000}
                height={1000}
                alt="slider2"
                className="w-full h-auto"
              />
            </div>
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

