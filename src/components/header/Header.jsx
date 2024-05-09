import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";
import firstFlag from "../assets/united-kingdom.png"
import secondFlag from "../assets/albania.png"

const Header = ({ currentLanguage, switchLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`sticky top-0 left-0 right-0 z-50 flex items-center justify-between flex-wrap p-3 2xl:py-5 lg:px-8 shadow-lg shadow-[#00000054] ${isScrolled ? 'bg-[#333332]' : 'bg-[#333332]'}`}>
      <a href="/" >
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src={logo} alt='' className='object-contain w-16 h-16 2xl:w-24 2xl:h-24' />
        </div>
      </a>
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
        >
          {isMenuOpen ? (
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Close</title>
              <path d="M3 3l14 14M17 3L3 17" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          )}
        </button>
      </div>
      <div className={`w-full lg:pl-10 2xl:pl-14 block flex-grow lg:flex lg:items-center lg:w-auto ${isMenuOpen ? '' : 'hidden'}`}>
        <div className="lg:flex-grow uppercase text-white font-custom1">
          <a href="/" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400 hover:border-b hover:border-t-black hover:duration-200 mr-10" onClick={closeMenu}>
            Home
          </a>
          <a href="#whoweare" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400 hover:duration-200 hover:border-b hover:border-t-black mr-10" onClick={closeMenu}>
            About Us
          </a>
          <a href="#ourvalues" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400 hover:duration-200 hover:border-b hover:border-t-black mr-10" onClick={closeMenu}>
            Our Values
          </a>
          <a href="#services" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400 hover:border-b hover:border-t-black hover:duration-200 mr-10" onClick={closeMenu}>
            Services
          </a>
          <a href="#projects" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400 hover:border-b hover:border-t-black hover:duration-200 mr-10" onClick={closeMenu}>
            Projects
          </a>
          <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400 hover:border-b hover:border-t-black hover:duration-200" onClick={closeMenu}>
            Contact
          </a>
        </div>
        <div className="mt-4 lg:mt-0 grid lg:grid-cols-2 gap-x-3 gap-y-4">
          <button onClick={() => switchLanguage('en')} className={`mr-2 ${currentLanguage === 'en' ? 'text-white' : 'text-gray-400'}`}><img src={firstFlag} alt='' className='object-cover h-[20px] w-[20px] hover:scale-125 2xl:w-[25px] 2xl:h-[25px]' title='Translate to English' /></button>
          <button onClick={() => switchLanguage('al')} className={`mr-2 ${currentLanguage === 'al' ? 'text-white' : 'text-gray-400'}`}><img src={secondFlag} alt='' className='object-cover h-[20px] w-[20px] hover:scale-125 2xl:w-[25px] 2xl:h-[25px]' title='Translate to Albanian' /></button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
