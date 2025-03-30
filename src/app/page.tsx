import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import WebDevelopmentPage from '@/pages/category/web-development'

  // import WebDevelopmentPage from '@/category/web-development/page'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <Hero />
        <Categories />
        <About />
        <Contact />
      </main>
      <Footer />
      <WebDevelopmentPage/>
    </div>
  )
}