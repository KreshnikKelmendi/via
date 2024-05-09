import React, { useEffect, useState } from 'react';
import { apiUrl } from '../api/apiUrl';
import serviceImage from "../assets/Picture95.png"

const Services = ({ currentLanguage }) => {
  
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


  return (
    <div className='lg:h-screen relative py-[100px]'  id="services">
      <div className='px-4 lg:px-8 w-full h-full flex items-center '>
        <div className='text-right w-full'>
          {data?.data?.map((item) => (
            <div className='text-center' key={item.id}>
                <img src={serviceImage} alt='' className='w-28 h-28 object-cover' />
              <p className='mt-10 font-custom rounded-md uppercase text-white p-5 text-2xl 2xl:text-4xl bg-[#313232]'>
                {currentLanguage === "en"
                      ? item?.attributes?.title
                      : item?.attributes?.localizations?.data[0]?.attributes?.title}
              </p>
              <div className='text-left justify-center items-center flex'>
                <div className='font-custom1 text-sm rounded-md tracking-tighter text-black mt-4 p-5'>
                    <p className='font-custom text-lg lg:text-xl hover:mx-3 hover:duration-300 cursor-pointer hover:text-red-900'><span>&rarr; </span>{currentLanguage === "en"
                        ? item?.attributes?.firstService
                        : item?.attributes?.localizations?.data[0]?.attributes?.firstService}
                    </p>
                    <p className='font-custom text-lg lg:text-xl mt-4 hover:mx-3 hover:duration-300 cursor-pointer hover:text-red-900'><span>&rarr; </span>{currentLanguage === "en"
                        ? item?.attributes?.secondService
                        : item?.attributes?.localizations?.data[0]?.attributes?.secondService}
                    </p>
                    <p className='font-custom text-lg lg:text-xl mt-4 hover:mx-3 hover:duration-300 cursor-pointer hover:text-red-900'><span>&rarr; </span>{currentLanguage === "en"
                        ? item?.attributes?.thirdService
                        : item?.attributes?.localizations?.data[0]?.attributes?.thirdService}
                    </p>
                    <p className='font-custom text-lg lg:text-xl mt-4 hover:mx-3 hover:duration-300 cursor-pointer hover:text-red-900'><span>&rarr; </span>{currentLanguage === "en"
                        ? item?.attributes?.fourthService
                        : item?.attributes?.localizations?.data[0]?.attributes?.fourthService}
                    </p>
                    <p className='font-custom text-lg lg:text-xl mt-4 hover:mx-3 hover:duration-300 cursor-pointer hover:text-red-900'><span>&rarr; </span>{currentLanguage === "en"
                        ? item?.attributes?.fifthService
                        : item?.attributes?.localizations?.data[0]?.attributes?.fifthService}
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

export default Services;
