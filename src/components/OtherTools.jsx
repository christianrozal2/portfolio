import React from 'react'
import ToolCard from './ToolCard'
import { otherTools } from '../constants/constants'
import ScrollContainer from 'react-indiana-drag-scroll'


const OtherTools = () => {
  return (
    <>
      <div>
          <h3 className='text-text1 p-gradient uppercase text-sm sm:text-base md:text-xl lg:text-2xl mt-16'>OTHER TOOLS</h3>
      </div>
      <ScrollContainer className='mt-10 flex gap-5 overflow-x-auto hide-scrollbar'>
              {otherTools.map((index) => (
                <ToolCard key={index.id} card={index} />
              ))
              }
      </ScrollContainer>
    </>
  )
}

export default OtherTools