import React from 'react'
import Button from '../components/Button'
import { contact, union } from '../assets/assets'
import { contactInfo } from '../constants/constants'

const Contact = () => {
  return (
    <div className='container lg:mt-36 md:mt-28 sm:mt-20 mt-10 px-0'>
        <h2 className='h-gradient font-bold md:text-4xl sm:text-3xl text-2xl'>CONTACT</h2>
        <div className='lg:mt-10 md:mt-8 mt-7 flex gap-10 sm:flex-row flex-col'>
          <div className='sm:w-[50%] flex flex-col sm:items-start items-center'>
          <h3 className='text-gray-400 uppercase lg:text-2xl md:text-xl sm:text-lg'>Let's Connect!</h3>
            <div className='flex md:flex-row flex-col gap-3 mt-10 sm:items-start items-center'>
              <img loading='lazy' src={contact} alt="contact" className='max-w-[200px] max-h-[200px]'/>
                <div className='flex flex-col gap-3 my-auto'>
                  {contactInfo.map((index) => (
                    <div key={index} className='flex gap-3'>
                      <img loading='lazy' src={index.image} alt={index.title} className='size-[30px]' />
                      <div className='flex flex-col gap-1'>
                        <p className='md:text-lg sm:text-base text-sm'>{index.title}</p>
                      </div>
                    </div>
                  ))
                    
                  }
                </div>
            </div>
            <div>
              <h3 className='mt-10 text-gray-400 italic text-center lg:text-3xl md:text-2xl sm:text-xl text-lg'>"Let's work together to find the perfect solution."</h3>
            </div>
          </div>
          <div className='sm:w-[50%] '>
            <h3 className='text-gray-400 uppercase lg:text-2xl md:text-xl sm:text-lg'>Message ME</h3>
            <form className='mt-10 sm:text-base text-sm'>
              <div className='flex flex-col'>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' className='border-2 border-black rounded-md p-2 text-black opacity-90' />
              </div>
              <div className='flex flex-col mt-4'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' className='border-2 border-black rounded-md p-2 text-black opacity-90' />
              </div>
              <div className='flex flex-col mt-4'>
                <label htmlFor='message'>Message</label>
                <textarea id='message' className='border-2 border-black rounded-md p-2 text-black opacity-90'></textarea>
              </div>
              <div className='lg:mt-10 md:mt-8 sm:mt-7 mt-5'>
                <Button label='Send message' imageType='email' />
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact