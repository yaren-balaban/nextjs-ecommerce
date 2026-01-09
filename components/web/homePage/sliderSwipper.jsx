"use client";
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function SliderSwipper() {
    return (
        <Swiper
            navigation={true}
            modules={[Navigation, Autoplay, Pagination]}
            loop={true}
            autoplay={{
                delay: 5000
            }}
            pagination={{
                clickable: true,
            }}
        >
            <SwiperSlide>
                <div className="flex">
                    <Image
                        src={"/img/sliders/slider_1.webp"}
                        width={1000}
                        height={1000}
                        alt="slider1"
                        className="w-full h-auto"
                    />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="flex">
                    <Image
                        src={"/img/sliders/slider_2.webp"}
                        width={1000}
                        height={1000}
                        alt="slider2"
                        className="w-full h-auto"
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
