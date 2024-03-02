import { check } from '../assets/assets';

const ProjectCard = ({ card }) => {
  const { title, subtitle, description, date, image, link } = card;
  return (
    <a href={link} target="_blank">
      <div className='bg-container p-5 gap-5 rounded-2xl sm:w-[320px] w-[250px] h-full hover:bg-hover1 transition duration-300 ease-in-out flex flex-col justify-between'>  
        <div>
          <img src={image} alt={title} className='rounded-2xl'/>
          <div className='flex justify-center items-center gap-3 mt-5'>
            <h3 className='sm:text-lg text-base'>{title}</h3>
            <img src={check} alt="check" className='size-5'/>
          </div>
          <p className='text-text1 mt-1 text-center italic sm:text-base text-sm'>{subtitle}</p>
          <div className='flex flex-col mt-3 gap-5'>
            <p className='text-text1 sm:text-base text-sm'>{description}</p>
          </div>
        </div>
        <p className='italic sm:text-base text-sm'>Date posted: {date}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
