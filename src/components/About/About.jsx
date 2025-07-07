import React from 'react'
import './About.css'
import aboutImgVideo from '../../assets/PantalloImagen.gif' 
import playIcon from '../../assets/boton-de-play.png'

function About({setPlayState}) {

  return (
    <div className='about'>
        <div className="about-left">
            <img src={aboutImgVideo} alt="imagen Video" className='about-img' />
            <img src={playIcon} alt="icono play" className='about-icon' onClick={()=>{
                {setPlayState(true)}
            }} />
        </div>
        <div className="about-right">
            <h3>Sobre nuestra Empresa</h3>
            <h2>Soluciones Eléctricas Confiables</h2>
            <p>
                Somos una empresa de servicios eléctricos con base en Mercedes, dedicada a brindar 
                soluciones integrales y confiables tanto para hogares como para negocios en toda la región. 
                </p>
                <p>
                Con años de experiencia en el sector, nuestro equipo de electricistas altamente calificados se compromete a ofrecer un trabajo seguro, eficiente y de la más alta calidad.
                Entendemos las necesidades específicas de cada cliente, ya sea la instalación de iluminación moderna en un hogar, el mantenimiento de sistemas eléctricos complejos en un local comercial o la implementación de soluciones energéticas eficientes.
                </p>
                <p>
                Nuestra prioridad es garantizar la seguridad y el correcto funcionamiento de sus instalaciones eléctricas, brindando tranquilidad y confianza en cada proyecto que emprendemos. 
                Contáctenos hoy mismo para descubrir 
                cómo podemos ayudarle con todas sus necesidades eléctricas.
                </p>
        </div>
    </div>
  )
}

export default About