import React, { useState } from 'react';
import { menu, close } from '../assets/assets';
import { navLinks } from '../constants/constants';
import Button from './Button';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='flex items-center justify-between py-4 font-semibold'>
            <div>
                <p className='gradient2text md:text-2xl sm:text-xl text-lg'>Christian</p>
            </div>

            <div className='md:flex hidden'>
                <ul className='flex gap-10 sm:text-base text-sm'>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={link.id} className='cursor-pointer navlink transition duration-300 ease-in-out hover:text-gray-400'>
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className='flex gap-5'>
                <a href="#contact" className='hidden ss:flex'>
                    <Button type='primary' label='Contact Me' imageType='email' />
                </ a>
                <img 
                    src={menuOpen ? close : menu} 
                    alt="menu" 
                    className='md:hidden flex cursor-pointer' 
                    onClick={toggleMenu}
                />
            </div>
            
            {menuOpen && (
                <ul className='absolute top-20 md:right-14 sm:right-12 right-6 w-[180px] text-center md:hidden flex flex-col sm:gap-10 ss:gap-7 gap-5 sm:text-base text-sm bg-container p-5 opacity-90 border-y-2 border-y-outline1'>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={link.id} className='cursor-pointer navlink transition duration-300 ease-in-out hover:text-gray-400'>
                                {link.title}
                            </a>
                        </li>
                    ))}
                    <div className='ss:hidden flex justify-center'>
                        <a href="#contact">
                            <Button type='primary' label='Contact Me' imageType='email' />
                        </ a>
                    </div>
                </ul>
            )}
        </div>
    );
};

export default Navbar;
