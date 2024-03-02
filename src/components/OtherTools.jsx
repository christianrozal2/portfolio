import React from 'react'
import ToolCard from './ToolCard'
import { otherTools } from '../constants/constants'
import ScrollContainer from 'react-indiana-drag-scroll'


const OtherTools = () => {
  return (
    <>
      <div>
          <h3 className='text-text1 p-gradient uppercase text-sm sm:text-base md:text-xl lg:text-2xl lg:mt-16 md:mt-14 sm:mt-12 mt-10'>OTHER TOOLS</h3>
      </div>
      <ScrollContainer className='lg:mt-10 md:mt-8 mt-7 flex sm:gap-5 gap-3 overflow-x-auto hide-scrollbar'>
              {otherTools.map((index) => (
                <ToolCard key={index.id} card={index} />
              ))
              }
      </ScrollContainer>
    </>
  )
}

export default OtherTools