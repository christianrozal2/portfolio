import React from 'react'
import { arrow } from '../assets/assets'

const LanguageCard = ({card}) => {
    const { title, subtitle, description, image, link } = card
  return (
    <a href={link} target="_blank">
        <div className='flex sm:w-[413px] w-[240px] bg-container p-5 rounded-2xl hover:bg-hover1 transition duration-300 ease-in-out cursor-pointer'>
            <div className='flex flex-col gap-3'>
                <h3 className='gradient2text sm:text-2xl text-xl font-semibold'>
                    {title}
                </h3>
                <h4 className='italic sm:text-lg text-base'>
                    {subtitle}
                </h4>
                <p className='text-text1 sm:text-base text-sm'>
                    {description}
                </p>
                <div className='flex items-center'>
                    <p className='sm:text-base text-sm'>
                        Check documentation
                    </p>
                    <img src={arrow} alt="arrow" className='size-6'/>
                </div>
            </div>
            <div className='self-end w-[100%]'>
                <img src={image} alt={title} />
            </div>
        </div>
    </a>
  )
}

export default LanguageCard