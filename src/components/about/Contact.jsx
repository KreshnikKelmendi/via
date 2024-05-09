import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaInstagram, FaFacebook, FaBlenderPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
    <div id='contact' className='h-screen flex flex-col lg:flex-row items-center bg-[#333332] text-white'>
      <div className='lg:w-1/2'>
      <div className='font-custom1 flex px-4 lg:px-8 flex-col mt-10'>
        <p className="font-custom text-2xl 2xl:text-4xl uppercase ml-7">Contact</p>
        <div className="flex items-center mt-6">
          <FaMapMarkerAlt className="mr-2" />
          <p className='2xl:text-lg ml-1'>Industrial Zone Gërlicë <br />Ferizaj 70000 Republic of Kosovo</p>
        </div>
        <div className="flex items-center mt-6">
          <FaEnvelope className="mr-2" />
          <p className='2xl:text-lg ml-1'>info@via-ks.com</p>
        </div>
        <div className="flex items-center mt-6">
          <FaBlenderPhone className="mr-2" />
          <p className='2xl:text-lg ml-1'>+383 (0) 290 310 300</p>
        </div>
        <div className="flex items-center mt-6">
          <FaPhone className="mr-2" />
          <p className='2xl:text-lg ml-1'>+383 (0) 49 421 900</p>
        </div>
        <div className='flex cursor-pointer ml-7'>
            <div className="w-16 mt-6">
                <a href='https://www.instagram.com/viashpk/' target='_blank' title='Follow us on Instagram'>
                    <FaInstagram className="mr-2 text-[30px] 2xl:text-4xl hover:scale-110 hover:duration-300" />
                </a>
            </div>
            <div className=" mt-6">
            <FaFacebook className="text-[30px] 2xl:text-4xl hover:scale-110 hover:duration-300" />
            </div>
        </div>
      </div>
      </div>
      <div className='lg:w-1/2 w-full mt-8 lg:mt-0 h-[100%]'>
      <iframe 
          title='Location Map' 
          className='w-full h-full lg:p-8 p-3 lg:rounded-[40px]' 
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94188.71061523256!2d21.314556660000946!3d42.461840106248346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13548d28fe87b91d%3A0xab45b8a9d06a705!2sGjilan!5e0!3m2!1sen!2s!4v1713414524032!5m2!1sen!2s`}
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          style={{ filter: 'grayscale(70%) brightness(80%)' }} // Apply black theme
        />
      </div>
    </div>
    <div className='py-5 bg-[#333331fa] text-center font-custom1 text-sm text-gray-400'>
      <p>&copy; 2024 VIA sh.p.k. All rights reserved</p>
    </div>
    </>
  );
};

export default Contact;
