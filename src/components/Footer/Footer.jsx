import React from 'react'
import './Footer.css'
import { Link } from 'react-scroll';
function Footer() {
  return (
    <div className='footer'>
        <p>2025 AM Electrotecnia. Todos los derechos reservados.</p>
        <div className="footer-content">
            <div className="footer-links">
            <a>
            <Link
            to='hero'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            >
            Inicio
            </Link></a>
            <a>
            <Link
            to='about'
            spy={true}
            smooth={true}
            offset={-250}
            duration={500}
            >
                Nosotros</Link></a>
            <a>
            <Link
            to='services'
            spy={true}
            smooth={true}
            offset={-400}
            duration={500}
            >
                Servicios</Link></a>
            <a>
                        <Link
            to='gallery'
            spy={true}
            smooth={true}
            offset={-400}
            duration={500}
            >    
                Galería</Link></a>
            </div>
        </div>
          

    </div>
  )
}

export default Footer;
