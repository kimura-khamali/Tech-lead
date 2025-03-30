// import Link from 'next/link';

// export default function Categories() {
//   const categories = [
//     { id: 1, title: 'Web Development', color: 'bg-[#3366CC]' },
//     { id: 2, title: 'Web Development', color: 'bg-[#3366CC]' },
//     { id: 3, title: 'UI/UX Design', color: 'bg-[#3366CC]' },
//   ];

//   return (
//     <section id="categories" className="py-16 my-8 max-w-6xl mx-auto px-4">
//       <h2 className="text-5xl font-bold mb-16 text-center">Categories</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {categories.map((category) => (
//           <div 
//             key={category.id} 
//             className={`${category.color} rounded-3xl p-10 text-white shadow-md hover:shadow-lg transition-shadow`}
//           >
//             <div className="bg-[#FF6B35] w-16 h-16 rounded-full mb-6"></div>
//             <h3 className="text-xl font-medium">{category.title}</h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



import Link from 'next/link';



export default function Categories() {
  const categories = [
    { id: 1, title: 'Web Development', color: 'bg-[#3366CC]', slug: 'web-development' },
    { id: 2, title: 'Web Development', color: 'bg-[#3366CC]', slug: 'web-development-2' },
    { id: 3, title: 'UI/UX Design', color: 'bg-[#3366CC]', slug: 'ui-ux-design' },
  ];

  return (
    <section id="categories" className="py-16 my-8 max-w-6xl mx-auto px-4">
      <h2 className="text-5xl font-bold mb-16 text-center">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link 
            href={`/category/${category.slug}`} 
            key={category.id}
          >
            <div 
              className={`${category.color} rounded-3xl p-10 text-white shadow-md hover:shadow-lg transition-shadow`}
            >
              <div className="bg-[#FF6B35] w-16 h-16 rounded-full mb-6"></div>
              <h3 className="text-xl font-medium">{category.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}