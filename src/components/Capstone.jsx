import React from 'react'
import Button from './Button'

const Capstone = ({card}) => {
  const { title1, title2, content, image, variant, link } = card

  return (
    <div className='rounded-3xl'>
      <div className='container grid grid-cols-1 sm:grid-cols-2 gap-10 border-y-2 border-y-outline1 shadow-2 rounded-3xl py-10 sm:py-14 items-center'>
        <div className={`rounded-3xl px-4 sm:px-12 pt-4 sm:pt-12 background-1 ${variant === 'primary' ? 'order-2' : 'order-1'}`}>
          <img src={image} alt={title1} />
        </div>
        <div className={`${variant === 'primary' ? 'order-1' : 'order-2'}`}>
          <div>
            <p className='text-text1 italic p-gradient uppercase text-sm sm:text-base md:text-xl lg:text-2xl'>{title1}</p>
          </div>
          <h2 className='h-gradient font-bold text-2xl sm:text-3xl md:text-4xl mt-4 '>{title2}</h2>
          <p className='text-text1 text-sm sm:text-base md:text-xl lg:text-2xl mt-6 sm:mt-8 lg:mt-10'>{content}</p>
          <a href={link} target='_blank'>
            <div className='mt-5'>
              <Button type='primary' label='Visit Site' />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Capstone