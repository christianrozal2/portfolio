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
    <div className='container mt-36 px-0'>
        <h2 className='h-gradient font-bold text-2xl sm:text-3xl md:text-4xl'>OTHER PROJECTS</h2>
        <h3 className='text-text1 p-gradient uppercase text-sm sm:text-base md:text-xl lg:text-2xl mt-3'>FRONTEND WEB DEVELOPMENT</h3>
        <ScrollContainer 
          className={`mt-10 flex gap-5 overflow-x-auto hide-scrollbar ${hasScrolled ? '' : 'scrollable-container'}`} 
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