import React from 'react'
import Capstone from '../components/Capstone'
import OtherProjects from '../components/OtherProjects'
import { capstone } from '../constants/constants'

const Projects = () => {
  return (
    <section>
      <div className='flex flex-col gap-36'>
        {capstone.map((index) => {
          return <Capstone key={index.id} card={index} />
        })}
      </div>
        
      <OtherProjects />
    </section>
  )
}

export default Projects