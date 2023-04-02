import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./cubo.css";
import fcc from "../../assets/img/fcc.jpg"
import udemy from "../../assets/img/udemy.jpeg"
import academlo from "../../assets/img/academlo.png"
import alura from "../../assets/img/alura.png"
import left from "../../assets/img/left.gif"

// import required modules
import { Autoplay, EffectCube, Pagination } from "swiper";

export default function Cubo() {
    return (
        <div className="cubo">
            <h2>Me certifican...</h2>
            <img src={left} alt="gif" className="left_gif"/>
            <Swiper
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[EffectCube, Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={udemy} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={alura} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={academlo} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={fcc} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={udemy} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={alura} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={academlo} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={fcc} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}