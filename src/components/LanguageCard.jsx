import React from 'react'
import { arrow } from '../assets/assets'

const LanguageCard = ({card}) => {
    const { title, subtitle, description, image, link } = card
  return (
    <a href={link} target="_blank">
        <div className='flex w-[413px] bg-container p-5 rounded-2xl hover:bg-hover1 transition duration-300 ease-in-out cursor-pointer'>
            <div>
                <h3 className='gradient2text text-2xl font-semibold'>
                    {title}
                </h3>
                <h4 className='italic text-lg mt-3'>
                    {subtitle}
                </h4>
                <p className='text-text1 mt-3'>
                    {description}
                </p>
                <div className='flex items-center'>
                    <p className='my-3'>
                        Check documentation
                    </p>
                    <img src={arrow} alt="arrow" className='w-[24px] h-[24px]'/>
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