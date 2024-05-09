import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import about1 from "../assets/dd.jpg"
import about2 from "../assets/picture2.jpg"
import { apiUrl } from '../api/apiUrl';

const About = ({ currentLanguage }) => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [currentLanguage]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/abouts?populate=*`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // Number of slides to slide when move to next/prev
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <div className='h-screen lg:h-[100%] relative' id='whoweare'>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={4000}
        keyBoardControl
        customTransition="transform 700ms ease-in-out"
        transitionDuration={700}
        containerClass="carousel-container"
        arrows={false}
        centerMode={false}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {[about1, about2].map((image, index) => (
          <div key={index} className='h-screen'>
            <img src={image} alt={`Imag ${index + 1}`} className='w-full h-full object-cover' />
          </div>
        ))}
      </Carousel>
      <div className='absolute top-0 px-4 lg:px-8 w-full h-full flex items-center'>
        {data?.data?.map((item) => (
          <div className=''>
            <p className='font-custom rounded-md uppercase text-white lg:w-[100vh] p-5 text-2xl 2xl:text-4xl bg-[#1a1919] bg-opacity-75'>
              {currentLanguage === "en"
                    ? item?.attributes?.title
                    : item?.attributes?.localizations?.data[0]?.attributes?.title}
            </p>
            <p className='font-custom1 text-sm 2xl:text-lg rounded-md text-justify tracking-tighter text-white mt-4 lg:w-[100vh] p-5 bg-[#1a1919] bg-opacity-75'>
              {currentLanguage === "en"
                    ? item?.attributes?.description
                    : item?.attributes?.localizations?.data[0]?.attributes?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
