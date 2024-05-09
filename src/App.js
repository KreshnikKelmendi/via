import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Importing the FaArrowUp icon from react-icons/fa
import HomePage from './landingPage/HomePage';

function App() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  // Add scroll event listener to detect scroll position
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <HomePage />
      {isSticky && (
        <button
          className="fixed bottom-2 right-1 lg:bottom-10 lg:right-8 rounded-md bg-[#333332] hover:bg-white hover:text-black hover:duration-300 hover:animate-pulse text-white font-custom1 p-1 lg:px-2 lg:py-[10px] flex items-center"
          onClick={handleScrollToTop}
          title='Scroll to top'
        >
          <FaArrowUp className="h-4 w-4 lg:h-5 lg:w-5" />
        </button>
      )}
    </div>
  );
}

export default App;
