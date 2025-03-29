import React from 'react';
import Image from 'next/image';
import circularDot from '../../public/images/image.png';
import circular from '../../public/images/circular.png';

export default function Contact() {
  return (
    <section id="contact" className="py-12 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
      
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Column - Contact Information */}
        <div className="w-full md:w-1/2">
          <div className='text-center mb-6'>
            <h3 className="font-bold text-lg mb-4">Let&apos;s Connect</h3>
            <p className="text-gray-700 mb-6">
              Whether you&apos;re interested in contributing, advertising, or just have a question about our content, our team is here to help.
            </p>
          </div>
          <div className="space-y-6">
            {/* Email Contact */}
            <div className="flex items-start">
              <Image 
                src={circular} 
                alt="Circular" 
                width={32}
                height={32}
                className="mr-4 flex-shrink-0" 
              />
              <div>
                <h4 className="font-medium">Email Us</h4>
                <p className="text-gray-700">hello@digitalinsights.com</p>
              </div>
            </div>
            
            {/* Phone Contact */}
            <div className="flex items-start">
              <Image 
                src={circularDot} 
                alt="Circular dot" 
                width={32}
                height={32}
                className="mr-4 flex-shrink-0" 
              />
              <div>
                <h4 className="font-medium">Call Us</h4>
                <p className="text-gray-700">+1 (555) 123-4567</p>
              </div>
            </div>
            
            {/* Address Contact */}
            <div className="flex items-start">
              <Image 
                src={circular} 
                alt="Circular" 
                width={32}
                height={32}
                className="mr-4 flex-shrink-0" 
              />
              <div>
                <h4 className="font-medium">Visit Us</h4>
                <p className="text-gray-700">123 Tech Street, Digital Valley, CA 94103</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column - Contact Form */}
        <div className="w-full md:w-1/2">
          <div className="bg-[#3366CC] rounded-lg p-8">
            <h3 className="text-white text-center text-xl mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your Name" 
                  className="w-full p-4 rounded-md border-0 focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Your Email" 
                  className="w-full p-4 rounded-md border-0 focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
              
              <div className="flex justify-center">
                <button 
                  type="submit"
                  className="bg-[#FF6B35] text-white px-8 py-3 rounded-md hover:bg-orange-600 transition duration-300 w-full"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}