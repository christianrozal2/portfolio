import React, { useEffect, useState } from 'react'
import { arrow, hero, union } from '../assets/assets'
import HeroCard from '../components/HeroCard';
import { heroCard } from '../constants/constants';


const Hero = () => {
  const name = "Hi, I'm Christian";

  return (
    <section>
      <div className='container px-0 flex md:flex-row flex-col-reverse gap-10 items-center md:text-left text-center'>
          <div className='md:w-7/12 flex flex-col lg:gap-5 md:gap-4 gap-3'>
            <div className='inline-flex gap-3 items-center gradient2text mx-auto md:mx-0'>
              <img src={union} alt="union" className='md:h-[26px] md:w-[28px] h-[20px] w-[22px]'/>
              <h2 className='font-semibold lg:text-xl md:text-lg sm:text-md text-sm'>Welcome to my Portfolio</h2>
            </div>
            <h1 className='font-bold lg:text-7xl md:text-6xl sm:text-5xl text-3xl'>
              {name.split('').map((char, index) => (
                <span key={index} style={{ animationDelay: `${index * 0.1}s` }} className="animate">
                  {char}
                </span>
              ))}
            </h1>
              <p className='font-bold text-gray-400 lg:text-4xl md:text-3xl sm:text-2xl text-xl'>Full-stack Web Developer</p>
              <p className='text-gray-400 lg:text-2xl md:text-xl sm:text-lg text-sm lg:mt-5 md:mt-3 mt-2'>Christian Rozal is a skilled Full-stack Web Developer known for expertise in both front-end and back-end technologies. With a passion for creating dynamic and user-friendly web applications, Christian brings a comprehensive skill set to the field of web development.</p>
              <a href="">
                <a href='https://drive.google.com/file/d/1YuqH5wee_3Kchs7aLMcCPaxtBxArHNX7/view?usp=sharing' target='_blank' className='flex justify-center md:justify-start items-center'>
                  <p className='hover:text-gray-400 lg:text-2xl md:text-xl sm:text-lg text-sm'>Download Resume</p>
                  <img src={arrow} alt="arrow" className='size-6' />
                </a>
              </a>
          </div>
          <div className='md:ml-auto'>
              <img src={hero} alt="hero" className='md:max-w-[400px] sm:max-w-[350px] max-w-[250px] h-auto'/>
              <div className="absolute z-[-1] size-[30%] top-0 pink__gradient"></div>
              <div className="absolute z-[-1] md:size-[400px] sm:size-[350px] size-[250px] top-32 purple__gradient"></div>
          </div>
      </div>
      <div className='lg:mt-36 md:mt-28 sm:mt-20 mt-10 container px-0 flex gap-5 md:flex-row flex-col md:justify-between items-center'>
        {heroCard.map((index) => (
          <HeroCard key={index.id} card={index} />
        ))}
      </div>
    </section>
  )
}

export default Hero