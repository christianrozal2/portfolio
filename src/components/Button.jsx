import React from 'react'
import { email, external } from '../assets/assets';

const Button = ({type, label, imageType}) => {
    const imageSrc = imageType === 'email' ? email : external;

  return (
    <button className='rounded-full py-2 md:py-3 px-10 gradient2 transition duration-300 ease-in-out cursor-pointer text-xs sm:text-base'>
      <div className='flex gap-3 items-center'>
        <img src={imageSrc} alt={imageType} className='w-[16px] h-[16px]'/>
        {label}
       </div>
    </button>
  )
}

export default Button