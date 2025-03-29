import Image from 'next/image';
import me from '../../public/images/me.png'; 
import circularDot from '../../public/images/image.png';
import circular from '../../public/images/circular.png';

export default function About() {
  return (
    <section id="about" className="py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">About</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Side: Your Image */}
        <div className="w-full md:w-1/3 relative">
          <div className="relative h-64 w-full">

          <div className="flex items-start">
              <Image 
                src={circularDot} 
                alt="Circular" 
                width={32}
                height={32}
                className="absolute -top-4 -left-4 w-12 h-12" 
              />
              </div>
              <div className="flex items-start">
              <Image 
                src={circular} 
                alt="Circular" 
                width={32}
                height={32}
                className="absolute -top-4 -right-4 w-12 h-12" 
              />
              </div>

              <div className="flex items-start">
              <Image 
                src={circularDot} 
                alt="Circular" 
                width={32}
                height={32}
                className="absolute -bottom-8 -left-4 w-12 h-12" 
              />
              </div>
              <div className="flex items-start">
              <Image 
                src={circular} 
                alt="Circular" 
                width={32}
                height={32}
                className="absolute -bottom-8 -right-4 w-12 h-12" 
              />
              </div>
            {/* <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#3366CC] rounded-full"></div>
            <div className="absolute top-1/2 -right-4 w-8 h-8 bg-[#FF6B35] rounded-full"></div>
            <div className="absolute -bottom-4 left-1/3 w-8 h-8 bg-[#3366CC] rounded-full"></div> */}
            <div className="absolute h-full w-full">
              <Image 
                src={me}  // Add your personal image here
                alt="My Image" // Alternative text for your image
                layout="fill" 
                // objectFit="cover"
                className="rounded-b-sm"
                priority
              />
            </div>
          </div>
        </div>
        
        {/* Right Side: Description */}
        <div className="w-full md:w-2/3">
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula.
          </p>
        </div>
      </div>
    </section>
  );
}