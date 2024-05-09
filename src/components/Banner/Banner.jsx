import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../api/apiUrl";
import image1 from "../assets/32.png"
import image2 from "../assets/33.png"
import image3 from "../assets/35.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const items = [
  {
    image: image1,
  },
  {
      image: image2,
  },
  {
    image: image3
  }]

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Banner = ({ currentLanguage }) => {

  return (
    <>
    <div className="w-full border-b-4 border-white lg:h-screen flex flex-col lg:flex-row relative">
      <div className="lg:w-1/2 flex p-6 px-10 items-center justify-center bg-[#333332]">
        <p className="text-white justify-center items-center">
          {/* Render data here */}
            <>
              <p className="font-custom uppercase text-2xl 2xl:text-4xl">
                Kelmendi
              </p>
              <p className="font-custom1 text-sm 2xl:text-lg mt-4 lg:pr-4 text-justify tracking-tighter">
                Kreshnik Kelmendi
              </p>
            </>
 
        </p>
      </div>
      <div className="lg:w-1/2 lg:pr-4 bg-[#333332]">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        showDots={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
      >
        {items?.map((item, index) => (
          <div key={index} className='carousel-item lg:mt-16 p-6 lg:p-0'>
            <img src={item.image} alt={item.title} className='w-full lg:h-[500px] 2xl:h-[800px] object-cover rounded-[6px]' />
          </div>
        ))}
      </Carousel>
      </div>
    </div>

</>
  );
};

export default Banner;
