import React from 'react'
import './Hero.css'
import flechaLogo from '../../assets/circulo-de-flecha.png'

export const Hero = () => {
  return (
    <div className='hero conteiner'>
        <div className="hero-text">
            <h1>Soluciones Eléctricas Confiables</h1>
            <p>
            Encuentra la tranquilidad que necesitas con nuestros servicios de electricidad integrales.
            Nuestro equipo de electricistas altamente capacitados y certificados se dedica a brindar 
            soluciones seguras y eficientes.</p>
            <button className='btn'>Contacta <img src={flechaLogo} alt="flecha-icono" /></button>
        </div>
    </div>
  )
}
