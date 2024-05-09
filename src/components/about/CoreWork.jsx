import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import about1 from "../assets/3-1.jpg"
import about2 from "../assets/3-2.jpg"
import { apiUrl } from '../api/apiUrl';
// import coreImage from "../assets/coreImage.png"

const CoreWork = ({ currentLanguage }) => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [currentLanguage]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/core-works?populate=*`);
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
      slidesToSlide: 1
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
    <div className='h-screen lg:h-[100%] relative'>
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
      <div className='absolute top-0 px-4 lg:px-8 w-full h-full flex items-center justify-end'>
        <div className=''>
        {/* <img src={coreImage} alt='' className='absolute left-8 rounded-md w-[70px] h-[70px] object-cover' /> */}
          {data?.data?.map((item) => (
            <div className='' key={item.id}>
              <p className='font-custom rounded-md uppercase text-white lg:w-[100vh] 2xl:w-full p-5 text-2xl 2xl:text-4xl bg-[#1a1919] bg-opacity-75'>
                {currentLanguage === "en"
                      ? item?.attributes?.title
                      : item?.attributes?.localizations?.data[0]?.attributes?.title}
              </p>
              <div className='grid lg:grid-cols-2 gap-x-10'>
                <div className='font-custom1 text-sm 2xl:text-lg rounded-md text-justify tracking-tighter text-white mt-4 lg:w-[100vh] 2xl:w-fit p-5 bg-[#1a1919] bg-opacity-75'>
                    <p className='font-custom text-xl'>{currentLanguage === "en"
                        ? item?.attributes?.safety
                        : item?.attributes?.localizations?.data[0]?.attributes?.safety}
                    </p>
                    <p className='mt-4'>
                        {currentLanguage === "en"
                            ? item?.attributes?.safetyDescription
                            : item?.attributes?.localizations?.data[0]?.attributes?.safetyDescription}
                    </p>
                </div>
                <div className='font-custom1 text-sm 2xl:text-lg rounded-md text-justify tracking-tighter text-white mt-4 lg:w-[100vh] 2xl:w-fit p-5 bg-[#1a1919] bg-opacity-75'>
                    <p className='font-custom text-xl'>{currentLanguage === "en"
                        ? item?.attributes?.improvement
                        : item?.attributes?.localizations?.data[0]?.attributes?.improvement}
                    </p>
                    <p className='mt-4'>
                        {currentLanguage === "en"
                            ? item?.attributes?.improvementDescription
                            : item?.attributes?.localizations?.data[0]?.attributes?.improvementDescription}
                    </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreWork;
