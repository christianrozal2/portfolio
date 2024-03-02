import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Contact from "./sections/Contact"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Tools from "./sections/Tools"

function App() {
  return (
    <>
      <div className='md:px-14 sm:px-12 px-6 bg-body fixed w-full top-0 opacity-90 z-10'>
        <Navbar />
      </div>

      <div id="about" className="mt-28 sm:mt-32 md:mt-36 lg:mt-48 lg:px-16 md:px-14 sm:px-12 px-6">
        <Hero />
      </div>

      <div id="projects" className="mt-10 sm:mt-16 md:mt-24 lg:mt-36 md:px-14 sm:px-12 px-6">
        <Projects />
      </div>

      <div id="tools" className="mt-10 sm:mt-16 md:mt-24 lg:mt-36 md:px-14 sm:px-12 px-6">
        <Tools />
      </div>

      <div id="contact" className="mt-10 sm:mt-16 md:mt-24 lg:mt-36 md:px-14 sm:px-12 px-6 background-2 lg:pb-36 md:pb-28 sm:pb-20 pb-10">
        <Contact />
      </div>

      <div className="px-6 sm:px-16 bg-body w-full">
        <Footer />
      </div>



    </>
  )
}

export default App
