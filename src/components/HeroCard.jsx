import React from 'react'
import { check } from '../assets/assets';

const HeroCard = ({card}) => {
    const { title1, title2 } = card;
  return (
    <div className='flex items-center gap-3 '>
        <p className='font-bold text-5xl gradient3text'>{title1}</p>
        <p className='text-text1 text-2xl font-semibold '>{title2}</p>
        <img src={check} alt="check" className='w-[30px] h-[30px]' />
    </div>
  )
}

export default HeroCard