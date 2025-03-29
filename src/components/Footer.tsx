import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
          <div>
            <Link href="/" className="text-lg font-medium">
              logo
            </Link>
          </div>
          <div>
            <Link href="#" className="text-gray-300 hover:text-white">
              Quick Links
            </Link>
          </div>
          <div>
            <Link href="#categories" className="text-gray-300 hover:text-white">
              Categories
            </Link>
          </div>
          <div>
            <Link href="#" className="text-gray-300 hover:text-white">
              CMS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}