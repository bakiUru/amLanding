import React from 'react'
import './Gallery.css'
import galleria1 from '../../assets/istockphoto-1165561132-612x612.jpg'
import galleria2 from '../../assets/istockphoto-1422099563-612x612.jpg'
import galleria3 from '../../assets/istockphoto-1428071835-612x612.jpg'
import galleria4 from '../../assets/los-electricistas-disfrutan-de-su-trabajo-4047606.webp'
import flechaIzq from '../../assets/flecha-derecha.png'




function Gallery() {
  return (
    <div className='galley-container'>
        <div className="gallery">
            
            <img src={galleria1} alt="imagen Trabajo Exito" />
            <img src={galleria2} alt="imagen Trabajo Exito" />
            <img src={galleria3} alt="imagen Trabajo Exito" />
            <img src={galleria4} alt="imagen Trabajo Exito" />
        </div>
        <button className='btn dark-btn'>Mas Trabajos <img src={flechaIzq} alt="flecha icono" /></button>
    </div>

  )
}

export default Gallery