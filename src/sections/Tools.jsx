import React from 'react'
import CoreTools from '../components/CoreTools'
import OtherTools from '../components/OtherTools'
import Languages from '../components/Languages'

const Tools = () => {
  return (
    <div className='container lg:mt-36 md:mt-28 sm:mt-20 mt-10 px-0'>
        <h2 className='h-gradient font-bold text-2xl sm:text-3xl md:text-4xl'>TOOLS</h2>
        <Languages />
        <CoreTools />
        <OtherTools />
    </div>
  )
}

export default Tools