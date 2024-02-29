import { check } from '../assets/assets';

const ProjectCard = ({card}) => {
  const { title, subtitle, description, date, image } = card;
  return (
    <a href="#" target="_blank">
        <div className='bg-container p-5 rounded-2xl w-[320px] hover:bg-hover1 transition duration-300 ease-in-out'>  
        <img src={image} alt={title} className='rounded-2xl'/>
        <div className='flex justify-center items-center gap-3 mt-5'>
            <h3 className='text-lg'>{title}</h3>
            <img src={check} alt="check" className='w-[20px] h-[20px]'/>
        </div>
        <p className='text-text1 mt-1 text-center italic'>{subtitle}</p>
        <p className='text-text1 mt-3'>{description}</p>
        <p className='mt-5 italic'>Date posted: {date}</p>
        </div>
    </a>

  );
};

export default ProjectCard;