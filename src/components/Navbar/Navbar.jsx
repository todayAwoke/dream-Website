import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.jpg'
import menu_icon from '../../assets/menu-icon.jpeg'
import { Link } from 'react-scroll'
const navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
    }
    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            < img src={logo} alt='' className='logo' />
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}> Home </Link ></li>
                <li> <Link to='about' smooth={true} offset={-260} duration={500}> About us </Link ></li>
                <li> <Link to='services' smooth={true} offset={-240} duration={500}> Services </Link ></li>
                <li><Link to='testimonial' smooth={true} offset={-260} duration={500}> Testimonial </Link ></li>
                <li className='btn'> <Link to='contact' smooth={true} offset={-260} duration={500}> Contact us </Link ></li>
            </ul>
            <img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu} />
        </nav >
    )
}

export default navbar