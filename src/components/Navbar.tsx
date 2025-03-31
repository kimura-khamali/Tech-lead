// // Import the required modules
// import Link from 'next/link';
// import Image from 'next/image';  
// import techlead from '../../public/images/tech lead logo.png'; 


// export default function Navbar() {
//   return (
//     <nav className="flex items-center justify-between py-4">
//       <div className="flex items-center">
//         <Link href="/" className="text-xl font-bold text-blue-600">
         
//           <Image 
//             src={techlead}               
//             alt="Tech Lead Logo"       
//             width={100}                  
//             height={30}                 
//             className="mr-2"           
//           />
//         </Link>
//       </div>
//       {/* Center Links Container */}
//       <div className="flex items-center justify-center flex-grow space-x-8">
//         <Link href="/" className="text-gray-800 hover:text-blue-600">
//           Home
//         </Link>
//         <Link href="#categories" className="text-gray-800 hover:text-blue-600">
//           Categories
//         </Link>
//         <Link href="#about" className="text-gray-800 hover:text-blue-600">
//           About
//         </Link>
//       </div>
//       <Link href="#contact" className="bg-[#FF6B35] text-white px-4 py-2 rounded-md hover:bg-orange-600">
//         Contact
//       </Link>
//     </nav>
//   );
// }




"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import techlead from '../../public/images/tech lead logo.png';

// Fix image import - use a static import with proper path
// If the image is in the public folder, we don't need to import it directly
// We can reference it with a string path starting with '/'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to determine if navbar should have shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
      isScrolled ? 'shadow-md' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">
              <Image 
                src="/images/tech lead logo.png"  // Fixed path to image in public folder
                alt="Tech Lead Logo"       
                width={100}                  
                height={30}                 
                className="mr-2"           
              />
            </Link>
          </div>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center justify-center flex-grow space-x-8">
            <Link href="/" className="text-gray-800 hover:text-blue-600">
              Home
            </Link>
            <Link href="#categories" className="text-gray-800 hover:text-blue-600">
              Categories
            </Link>
            <Link href="#about" className="text-gray-800 hover:text-blue-600">
              About
            </Link>
          </div>
          
          {/* Contact Button - Hidden on mobile */}
          <div className="hidden md:block">
            <Link href="#contact" className="bg-[#FF6B35] text-white px-4 py-2 rounded-md hover:bg-orange-600">
              Contact
            </Link>
          </div>
          
          {/* Hamburger Menu Button - Visible only on mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                // Close (X) icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu - Shown when hamburger is clicked */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 bg-white shadow-lg">
          <Link href="/" className="block px-3 py-2 text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-md">
            Home
          </Link>
          <Link href="#categories" className="block px-3 py-2 text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-md">
            Categories
          </Link>
          <Link href="#about" className="block px-3 py-2 text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-md">
            About
          </Link>
          <Link href="#contact" className="block px-3 py-2 bg-[#FF6B35] text-white rounded-md hover:bg-orange-600">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}