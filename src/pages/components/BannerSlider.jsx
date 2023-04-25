import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import sliderImg1 from '../../assets/slider-img/slider-1.jpg';
import sliderImg2 from '../../assets/slider-img/slider-2.jpg';
import sliderImg3 from '../../assets/slider-img/slider-3.jpg';


const BannerSlider = () => {
    return (
        <>
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={sliderImg1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={sliderImg2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={sliderImg3} alt="" /></SwiperSlide>
        
      </Swiper>  
        </>
    );
};

export default BannerSlider;