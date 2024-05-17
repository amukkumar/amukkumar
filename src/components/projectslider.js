"use client"
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { project } from '@/utils/data';

export default function ProjectSlider() {


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
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 2.3,
                        spaceBetween: 15,
                    },
                    1440: {
                        slidesPerView: 2.5,
                        spaceBetween: 15,
                    }
                }}
                loop={true}
                autoplay={true}
                navigation={false}
                mousewheel={false}
                modules={[Mousewheel, Autoplay, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                {/* {projects.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className='bg-card rounded-lg p-2'>
                                <div className='aspect-video h-100 overflow-x-hidden rounded-md'>
                                    <img alt='project1' className='w-100 h-100' src={process.env.NEXT_PUBLIC_API_URL + item.attributes?.image?.data?.attributes?.url} />
                                </div>
                                <div className='test mt-2 p-2'>
                                    <div className='flex justify-between items-start'>
                                        <p className='primary text-sm'>{item.attributes.type}</p>
                                        <p className='ternary text-sm'>{item.attributes.from} - {item.attributes.to}</p>
                                    </div>
                                    <h2 className='secondary text-2xl font-semibold'>{item.attributes.name}</h2>
                                    <p className='secondary text-sm ternary my-2 text-balance line-clamp-3'>
                                        {item.attributes.desc}
                                    </p>
                                    <div className='text-left'>
                                        <Link href='/'><span className='primary outline-dashed py-1 px-2 rounded-sm'>Read more</span></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })} */}

                {project.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className='bg-card rounded-lg p-2'>
                                <div className='aspect-video h-100 overflow-x-hidden rounded-md'>
                                    <img alt='project1' className='w-100 h-100' src={"/assets/image/projects/" + item.image} />
                                </div>
                                <div className='test mt-2 p-2'>
                                    <div className='flex justify-between items-start'>
                                        <p className='primary text-sm'>{item.type}</p>
                                        <p className='ternary text-sm'>{item.from} - {item.to}</p>
                                    </div>
                                    <h2 className='secondary text-2xl font-semibold'>{item.name}</h2>
                                    <p className='secondary text-sm ternary my-2 text-balance line-clamp-3'>
                                        {item.desc}
                                    </p>
                                    <div className='text-left'>
                                        <Link href={item.link} target='_blank'><span className='primary outline-dashed py-1 px-2 rounded-sm'>Read more</span></Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper >

        </>
    )
}
