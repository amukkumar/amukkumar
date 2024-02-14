"use client"
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

import project1 from '@/assets/image/project/pj1.png'

const Project = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                direction={'horizontal'}
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1.5,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 1.8,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 2.5,
                        spaceBetween: 20,
                    },
                    1440: {
                        slidesPerView: 2.8,
                        spaceBetween: 30,
                    }
                }}
                loop={true}
                autoplay={true}
                navigation={true}
                mousewheel={false}
                modules={[Mousewheel, Autoplay, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image alt="photo" src={project1}></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image alt="photo" src={project1}></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image alt="photo" src={project1}></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image alt="photo" src={project1}></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image alt="photo" src={project1}></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image alt="photo" src={project1}></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image alt="photo" src={project1}></Image>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper >

        </>
    );
}
export default Project