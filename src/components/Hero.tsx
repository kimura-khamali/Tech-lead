

import Link from 'next/link';
import Image from 'next/image';
import elipses from '../../public/images/Ellipse.png';
import elipse from '../../public/images/Ellipse 3.png';
import tech from '../../public/images/tech lead.png';

export default function Hero() {
  return (
    <section className="relative flex items-center justify-between min-h-screen bg-[#3366CC] px-12">
      {/* Content Container */}
      <div className="relative z-10 flex-1 max-w-md text-left">
        <h1 className="text-5xl font-semibold text-white leading-tight">
          Ever Ending Life begins with all technologies
        </h1>
        <p className="mt-4 text-lg text-white">
          Discover new insights of technology that are inspiring
        </p>
        <Link href="#contact">
          <button className="mt-6 bg-[#FF6B35] text-white px-6 py-2 rounded-md hover:bg-orange-600">
            Get Now
          </button>
        </Link>
      </div>
      
      {/* Tech Lead Image on right side */}
      <div className="flex-1 z-20 flex justify-end">
        <Image 
          src={tech} 
          alt="Tech Lead" 
          width={500}
          height={375}
          className="rounded-lg object-contain"
        />
      </div>
      
      {/* Left Semi-Circle */}
      <div className="absolute -left-20 -top-20">
        <Image 
          src={elipses} 
          alt="Circular" 
          width={320}
          height={320}
          className="opacity-200" 
        />
      </div>

      {/* Right Semi-Circle */}
      <div className="absolute -right-20 -bottom-20">
        <Image 
          src={elipse} 
          alt="Circular" 
          width={320}
          height={320}
          className="opacity-200" 
        />
      </div>
    </section>
  );
}

