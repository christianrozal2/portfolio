import React from 'react'
import Button from '../components/Button'
import { contact, union } from '../assets/assets'
import { contactInfo } from '../constants/constants'

const Contact = () => {
  return (
    <div className='container mt-36 px-0'>
        <h2 className='h-gradient font-bold text-2xl sm:text-3xl md:text-4xl '>CONTACT</h2>
        <div className='mt-10 flex gap-10'>
          <div className='w-6/12'>
          <h3 className='text-2xl text-text1 uppercase'>Let's Connect!</h3>
            <div className='flex gap-3 mt-10'>
              <img src={contact} alt="contact" className='size-[200px]'/>
                <div className='flex flex-col justify-center gap-3'>
                  {contactInfo.map((index) => (
                    <div key={index} className='flex gap-3'>
                      <img src={index.image} alt={index.title} className='size-[30px]' />
                      <div className='flex flex-col gap-1'>
                        <p className='text-lg'>{index.title}</p>
                      </div>
                    </div>
                  ))
                    
                  }
                </div>
            </div>
            <div>
              <h3 className='mt-10 text-text1 text-3xl italic text-center'>"Let's work together to find the perfect solution."</h3>
            </div>
          </div>
          <div className='w-6/12 '>
            <h3 className='text-2xl text-text1 uppercase'>Message ME</h3>
            <form className='mt-10'>
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
              <div className='mt-10'>
                <Button label='Send message' imageType='email' />
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact