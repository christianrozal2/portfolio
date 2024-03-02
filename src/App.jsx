import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Contact from "./sections/Contact"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Tools from "./sections/Tools"

function App() {
  return (
    <>
      <div className='px-6 sm:px-16 bg-body fixed w-full top-0 opacity-90 z-10'>
        <Navbar />
      </div>

      <div id="about" className="mt-10 sm:mt-16 md:mt-24 lg:mt-48 px-6 sm:px-16">
        <Hero />
      </div>

      <div id="projects" className="mt-10 sm:mt-16 md:mt-24 lg:mt-36 px-6 sm:px-16">
        <Projects />
      </div>

      <div id="tools" className="mt-10 sm:mt-16 md:mt-24 lg:mt-36 px-6 sm:px-16">
        <Tools />
      </div>

      <div id="contact" className="mt-10 sm:mt-16 md:mt-24 lg:mt-36 px-6 sm:px-16 background-2 pb-36">
        <Contact />
      </div>

      <div className="px-6 sm:px-16 bg-body w-full">
        <Footer />
      </div>



    </>
  )
}

export default App
