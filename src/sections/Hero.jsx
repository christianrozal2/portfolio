import React, { useEffect, useState } from 'react'
import { arrow, hero, union } from '../assets/assets'
import HeroCard from '../components/HeroCard';
import { heroCard } from '../constants/constants';


const Hero = () => {
  const name = "Hi, I'm Christian";

  return (
    <section>
      <div className='container px-0 flex gap-10 items-center'>
          <div className='w-7/12'>
            <div className='inline-flex gap-3 items-center gradient2text'>
              <img src={union} alt="union" />
              <h2 className='font-semibold text-xl'>Welcome to my Portfolio</h2>
            </div>
            <h1 className='font-bold text-7xl mt-5'>
              {name.split('').map((char, index) => (
                <span key={index} style={{ animationDelay: `${index * 0.1}s` }} className="animate">
                  {char}
                </span>
              ))}
            </h1>
              <p className='font-bold text-4xl text-text1 mt-5'>Full-stack Web Developer</p>
              <p className='mt-10 text-2xl text-text1'>Christian Rozal is a skilled Full-stack Web Developer known for expertise in both front-end and back-end technologies. With a passion for creating dynamic and user-friendly web applications, Christian brings a comprehensive skill set to the field of web development.</p>
              <a href="">
                <div className='mt-5 flex'>
                  <p className='text-2xl hover:text-text1'>Download Resume</p>
                  <img src={arrow} alt="arrow" />
                </div>
              </a>
          </div>
          <div className='ml-auto'>
              <img src={hero} alt="hero" className='max-w-[400px]'/>
              <div className="absolute z-[-1] w-[30%] h-[30%] top-0 pink__gradient"></div>
              <div className="absolute z-[-1] w-[400px] h-[400px] top-32 purple__gradient"></div>
          </div>
      </div>
      <div className='mt-36 container px-0 flex gap-5 justify-between'>
        {heroCard.map((index) => (
          <HeroCard key={index.id} card={index} />
        ))}
      </div>
    </section>
  )
}

export default Hero