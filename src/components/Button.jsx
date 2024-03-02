import React from 'react'
import { email, external } from '../assets/assets';

const Button = ({type, label, imageType}) => {
    const imageSrc = imageType === 'email' ? email : external;

  return (
    <button className='rounded-full md:py-3 py-2  lg:px-10 md:px-8 sm:px-7 px-4 gradient2 transition duration-300 ease-in-out cursor-pointer text-xs sm:text-base'>
      <div className='flex sm:gap-3 gap-2 items-center'>
        <img src={imageSrc} alt={imageType} className='size-4'/>
        {label}
       </div>
    </button>
  )
}

export default Button