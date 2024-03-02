import React from 'react'
import { check } from '../assets/assets';

const HeroCard = ({card}) => {
    const { title1, title2 } = card;
  return (
    <div className='flex items-center gap-3 '>
        <p className='font-bold gradient3text lg:text-5xl md:text-4xl sm:text-3xl text-2xl'>{title1}</p>
        <p className='text-text1 font-semibold lg:text-2xl md:text-xl sm:text-lg text-sm'>{title2}</p>
        <img src={check} alt="check" className='lg:size-7 md:size-6 sm:size-5 size-4' />
    </div>
  )
}

export default HeroCard