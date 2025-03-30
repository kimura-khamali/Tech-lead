// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import tech from '../../../public/images/tech lead.png';
// // import techIt from '../../../public/images/tech it.png';
// import techIt from '../../../public/images/tech it.png';
// import elipses from '../../../public/images/Ellipse.png';

// export default function WebDevelopmentPage() {
//   return (
//     <>
//       <Head>
//         <title>Web Development | Tech Lead</title>
//         <meta name="description" content="Explore our web development services and solutions" />
//       </Head>

//       <main>
//         {/* Header with blue background and orange circles */}
//         <div className="relative bg-[#3366CC] py-16 px-12 text-center">
//           <div className="relative bg-[#3366CC] rounded-full py-6 mb-8 text-center mx-auto max-w-3xl">
//             <h1 className="text-4xl font-semibold text-white">Web Development</h1>
            
//             {/* Left Orange Circle */}
//             <div className="absolute left-10 top-1/2 transform -translate-y-1/2">
//               <div className="bg-[#FF6B35] w-16 h-16 rounded-full"></div>
//             </div>
            
//             {/* Right Orange Circle */}
//             <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
//               <div className="bg-[#FF6B35] w-16 h-16 rounded-full"></div>
//             </div>
//           </div>
          
//           <p className="text-white text-lg max-w-2xl mx-auto">
//             Discover how our web development solutions can transform your online presence
//             and help your business thrive in the digital world.
//           </p>
//         </div>

//         <section className="py-16 bg-white px-12">
//           <div className="container mx-auto">
//             {/* Top Section with Desktop Image and Text */}
//             <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
//               {/* Left Column - Image */}
//               <div className="flex justify-center md:justify-start">
//                 <Image 
//                   src={tech} 
//                   alt="Web Development Desktop" 
//                   width={500}
//                   height={375}
//                   className="rounded-lg object-contain"
//                 />
//               </div>

//               {/* Right Column - Content */}
//               <div>
//                 <h2 className="text-2xl font-semibold text-[#3366CC] mb-4">Modern Web Solutions</h2>
//                 <p className="text-lg text-gray-800">
//                   We thrive through creating connection and coming up with the most valuable insight that can be benefacual to our daily changes in life. Our web development team creates responsive, accessible, and high-performance websites.
//                 </p>
//               </div>
//             </div>
            
//             {/* Bottom Section with Mobile Images and Text */}
//             <div className="grid md:grid-cols-2 gap-12 items-center">
//               {/* Left Column - Text */}
//               <div className="order-2 md:order-1">
//                 <h2 className="text-2xl font-semibold text-[#3366CC] mb-4">Mobile-First Development</h2>
//                 <p className="text-lg text-gray-800">
//                   We thrive through creating connection and coming up with the most valuable insight that can be benefacual to our daily changes in life. Our mobile-first approach ensures your website looks great on all devices.
//                 </p>
//               </div>
              
//               {/* Right Column - Mobile Images */}
//               <div className="flex justify-center md:justify-end order-1 md:order-2">
//                 <Image 
//                   src={techIt} 
//                   alt="Web Development Mobile" 
//                   width={500}
//                   height={375}
//                   className="rounded-lg object-contain"
//                 />
//               </div>
//             </div>
            
//             {/* Services Section */}
//             <div className="mt-20">
//               <h2 className="text-3xl font-semibold text-center mb-12">Our Web Development Services</h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {[
//                   {
//                     title: 'Frontend Development',
//                     description: 'Creating responsive, interactive user interfaces using modern technologies like React, Next.js, and Tailwind CSS.'
//                   },
//                   {
//                     title: 'Backend Development',
//                     description: 'Building robust server-side applications with Node.js, Express, and database solutions for powerful web applications.'
//                   },
//                   {
//                     title: 'Full-Stack Solutions',
//                     description: 'End-to-end web development from concept to deployment with focus on performance and user experience.'
//                   }
//                 ].map((service, index) => (
//                   <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm">
//                     <div className="bg-[#FF6B35] w-12 h-12 rounded-full mb-4"></div>
//                     <h3 className="text-xl font-medium text-[#3366CC] mb-2">{service.title}</h3>
//                     <p className="text-gray-700">{service.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             {/* Call to Action */}
//             <div className="text-center mt-16">
//               <Link href="/contact">
//                 <button className="bg-[#FF6B35] text-white px-8 py-3 rounded-md hover:bg-orange-600 transition-colors">
//                   Get Started
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }