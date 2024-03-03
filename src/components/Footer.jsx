import React from 'react'
import { footerInfo } from '../constants/constants'

const Footer = () => {
  return (
    <div className='py-6 flex sm:flex-row flex-col gap-5 sm:justify-between items-center text-center'>
      <div>
        <p className='sm:text-base text-sm'>&copy;  2024 Designed and developed by Christian Rozal</p>
      </div>
      <div className='flex gap-5 opacity-90'>
        {footerInfo.map((index) => (
          <a href={index.link} target='_blank'>
            <img loading='lazy' key={index.id} src={index.image} alt={index.id} className='sm:size-7 size-6' />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Footer