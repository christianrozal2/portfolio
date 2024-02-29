import React from 'react'
import { footerInfo } from '../constants/constants'

const Footer = () => {
  return (
    <div className='py-5 flex justify-between'>
      <div>
        <p>&copy;  2024 Designed and developed by Christian Rozal</p>
      </div>
      <div className='flex gap-5 opacity-90'>
        {footerInfo.map((index) => (
          <a href={index.link}>
            <img key={index.id} src={index.image} alt={index.id} className='size-[30px]' />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Footer