import React from 'react'
import Capstone from '../components/Capstone'
import OtherProjects from '../components/OtherProjects'
import { capstone } from '../constants/constants'

const Projects = () => {
  return (
    <section>
      <div className='flex flex-col lg:gap-36 md:gap-28 sm:gap-20 gap-10'>
        {capstone.map((index) => {
          return <Capstone key={index.id} card={index} />
        })}
      </div>
        
      <OtherProjects />
    </section>
  )
}

export default Projects