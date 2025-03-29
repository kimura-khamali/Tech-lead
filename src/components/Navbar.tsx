// Import the required modules
import Link from 'next/link';
import Image from 'next/image';  // Import Image from next/image for optimized loading
import techlead from '../../public/images/tech lead logo.png'; // Adjust this path based on your file structure

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4">
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
         
          <Image 
            src={techlead}               
            alt="Tech Lead Logo"       
            width={100}                  
            height={30}                 
            className="mr-2"           
          />
        </Link>
      </div>
      {/* Center Links Container */}
      <div className="flex items-center justify-center flex-grow space-x-8">
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
      <Link href="#contact" className="bg-[#FF6B35] text-white px-4 py-2 rounded-md hover:bg-orange-600">
        Contact
      </Link>
    </nav>
  );
}