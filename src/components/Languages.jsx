import { language } from '../constants/constants'
import ScrollContainer from 'react-indiana-drag-scroll'
import LanguageCard from './LanguageCard';

const Languages = () => {
  return (
    <div>
        <h3 className='text-gray-400 p-gradient uppercase text-sm sm:text-base md:text-xl lg:text-2xl mt-3'>LANGUAGES</h3>
        <ScrollContainer 
          className='mt-10 flex sm:gap-5 gap-3 overflow-x-auto hide-scrollbar'
        >
          {language.map((index) => (
            <LanguageCard key={index.id} card={index} />
          ))
          }
        </ScrollContainer>
    </div>
  )
}

export default Languages