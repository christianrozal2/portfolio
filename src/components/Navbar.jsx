import { navLinks } from '../constants/constants'
import Button from './Button'


const Navbar = () => {
    
    return (
        <div className='flex items-center justify-between py-4 font-semibold'>
            <div>
                <p className='text-2xl gradient2text'>Christian</p>
            </div>

            <div className='flex'>
                <ul className='flex gap-10 text-sm sm:text-base'>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={link.id} className='cursor-pointer navlink transition duration-300 ease-in-out hover:text-text1'>
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <Button type='primary' label='Contact Me' imageType='email' />
            </ div>

        </div>
    )
    }

export default Navbar