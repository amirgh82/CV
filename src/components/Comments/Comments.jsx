import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination'
import './Comments.css'
import Comment from './Comment/Comment'
export default function Comments() {

    const [slideLength, setSlideLength] = useState(3)

    useEffect(() => {
        const handleResizeSlider = () => {
            if (window.innerWidth >= 998) {
                setSlideLength(3);
            } else if (window.innerWidth >= 768) {
                setSlideLength(2);
            } else {
                setSlideLength(1);
            }
        };

        handleResizeSlider();

        window.addEventListener('resize', handleResizeSlider);
        return () => {
            window.removeEventListener('resize', handleResizeSlider);
        };
    }, [])






    return (
        <div className="comments-container">
            <Swiper
                className='swiper'
                spaceBetween={60}
                slidesPerView={slideLength}
                modules={[Pagination]}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <Comment writer='محمدرضا' />
                </SwiperSlide>
                <SwiperSlide>
                    <Comment writer='امیررضا' />
                </SwiperSlide>
                <SwiperSlide>
                    <Comment writer='محمدحسین' />
                </SwiperSlide>
                <SwiperSlide>
                    <Comment writer='جعفر' />
                </SwiperSlide>
                <SwiperSlide>
                    <Comment writer='سینا' />
                </SwiperSlide>
                <SwiperSlide>
                    <Comment writer='جواد' />
                </SwiperSlide>
            </Swiper>

        </div>
    )
}
