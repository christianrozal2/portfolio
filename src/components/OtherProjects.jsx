import { useState } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import ProjectCard from './ProjectCard'
import { frontend } from '../constants/constants';

const OtherProjects = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    const handleScroll = () => {
    setHasScrolled(true);
    };

  return (
    <div className='container px-0 lg:mt-36 md:mt-28 sm:mt-20 mt-10'>
        <h2 className='h-gradient font-bold md:text-4xl sm:text-3xl text-2xl '>OTHER PROJECTS</h2>
        <h3 className='text-gray-400 p-gradient uppercase lg:text-2xl md:text-xlsm:text-base text-sm  mt-3'>FRONTEND WEB DEVELOPMENT</h3>
        <ScrollContainer 
          className={`lg:mt-10 md:mt-8 mt-7 flex sm:gap-5 gap-3 overflow-x-auto hide-scrollbar ${hasScrolled ? '' : 'scrollable-container'}`} 
          onScroll={handleScroll}
        >
          {frontend.map((index) => (
            <ProjectCard key={index.id} card={index} />
          ))
          }
        </ScrollContainer>
    </div>
  )
}

export default OtherProjects