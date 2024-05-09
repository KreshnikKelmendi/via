import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import about1 from "../assets/maintenance-1.png"
import about2 from "../assets/maintenance-2.png"
import { apiUrl } from '../api/apiUrl';
import Maintenance from './Maintenance';

const ProjectsTwo = ({ currentLanguage }) => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [currentLanguage]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/services?populate=*`);
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
    <>
    <div className='h-screen lg:h-[100%] relative'>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
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
      
       <Maintenance currentLanguage={currentLanguage}/>
    </div>
    </>
  );
};

export default ProjectsTwo;
