import React from 'react'
import Button from './Button'

const Capstone = ({card}) => {
  const { title1, title2, content, image, variant, link } = card

  return (
    <div className='rounded-3xl'>
      <div className='container grid grid-cols-1 sm:grid-cols-2 gap-10 border-y-2 border-y-outline1 shadow-2 rounded-3xl items-center lg:py-10 md:py-8 py-7'>
        <div className={`rounded-3xl sm:px-12 px-5 sm:pt-12 pt-4 background-1 ${variant === 'primary' ? 'md:order-2' : 'md:order-1'}`}>
          <img src={image} alt={title1} />
        </div>
        <div className={`${variant === 'primary' ? 'order-1' : 'order-2'} flex flex-col lg:gap-5 md:gap-4 gap-3`}>
          <div>
            <p className='text-text1 italic p-gradient uppercase lg:text-2xl md:text-xl sm:text-base text-sm'>{title1}</p>
          </div>
          <h2 className='h-gradient font-bold md:text-4xl sm:text-2xl text-xl'>{title2}</h2>
          <p className='text-text1 lg:text-2xl md:text-xl sm:text-base text-sm lg:mt-5 md:mt-3 mt-2'>{content}</p>
          <a href={link} target='_blank'>
            <div className=''>
              <Button type='primary' label='Visit Site' />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Capstone