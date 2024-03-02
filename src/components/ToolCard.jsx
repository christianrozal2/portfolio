import React from 'react'
import { arrow, check } from '../assets/assets'

const ToolCard = ({card}) => {
  const { image, title1, title2, developer, link } = card
  return (
    <a href={link} target="_blank">
      <div className='flex flex-col sm:w-[280px] w-[250px] bg-container rounded-2xl hover:bg-hover1 transition duration-300 ease-in-out cursor-pointer text-center'>
          <div className='sm:w-[280px] w-[250px] text-center py-2 rounded-t-2xl bg-white gradient3'>
                  <h3 className='text-text2 font-semibold sm:text-lg text-base'>{title1}</h3>
          </div>
          
          <div className='flex flex-col items-center p-8'>
              <div className='rounded-full bg-hover1 p-10'>
                  <img src={image} alt={title1} className='sm:w-[80px] w-[60px]' />
              </div>
              <h1 className='font-bold mt-5 uppercase textGradient sm:text-base text-sm'>{title2}</h1>
              <p className='text-text1 italic sm:text-base text-sm'>{developer}</p>
              <div className='bg-body py-2 w-full rounded-lg mt-3 flex justify-center items-center'>
                  <p className='sm:text-base text-sm'>Learn More</p>
                  <img src={arrow} alt="arrow" className='sm:size-6 size-5'/>
              </div>
          </div>
      </div>
    </a>
  )
}

export default ToolCard