import React, { useEffect, useState } from 'react'
import './Navbar.css'
import amLogo from '../../assets/AM.png'
import menu_icon from '../../assets/lista-menu.png'
import menu_icon2 from '../../assets/menu.png'
import { Link } from 'react-scroll';


const NavBar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setmobileMenu] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[])

    const toogleMenu = () => {
        mobileMenu? setmobileMenu(false) : setmobileMenu(true);
    }
  return (
    <nav className={`container ${sticky? 'dark-nav':''}`}>
        <img src={amLogo} alt="AM Logo" className='logo' />
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li className='text'>
            <Link
            to='hero'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            >Inicio</Link> </li>
            <li className='text'>
            <Link
            to='about'
            spy={true}
            smooth={true}
            offset={-300}
            duration={500}
            >
            Nosotros</Link></li>
            <li className='text'>
            <Link
            to='services'
            spy={true}
            smooth={true}
            offset={-300}
            duration={500}
            >
                Servicios</Link></li>
            <li className='text'>
            <Link
            to='testimonials'
            spy={true}
            smooth={true}
            offset={-300}
            duration={500}
            >
                Testimonios</Link></li>
            <li className='text'>
            <Link
            to='gallery'
            spy={true}
            smooth={true}
            offset={-300}
            duration={500}
            >
                Galeria</Link></li>
            <li><Link
            to='contact'
            spy={true}
            smooth={true}
            offset={-300}
            duration={500}
            className='btn'>Contactanos</Link></li>
        </ul>
        <img src={mobileMenu?menu_icon2:menu_icon} alt="menu icono" className='menu-icon' onClick={toogleMenu}/>
    </nav>
  )
}

export default NavBar