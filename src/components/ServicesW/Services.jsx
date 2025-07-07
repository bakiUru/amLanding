import React from 'react'
import './Services.css'
import trabajo1 from '../../assets/trabajo1.png'
import trabajo2 from '../../assets/trabajo2.png'
import trabajo3 from '../../assets/trabajo3.png'
import icon1 from '../../assets/luz.png'
import icon2 from '../../assets/sistema-de-energia.png'
import icon3 from '../../assets/cableado.png'



function Services() {
  return (
    <div className='services'>
        <div className="trabajo">
            <img src={trabajo1} alt="imagen trabajador" />
            <div className="caption">
                <img src={icon1} alt="icono" />
                <p>Iluminacion</p>
            </div>
        </div>
        <div className="trabajo">
            <img src={trabajo2} alt="imagen trabajador" />
            <div className="caption">
                <img src={icon2} alt="icono" />
                <p>Tableros</p>
            </div>
        </div>
        <div className="trabajo">
            <img src={trabajo3} alt="imagen trabajador" />
            <div className="caption">
                <img src={icon3} alt="icono" />
                <p>Cableado</p>
            </div>
        </div>
    </div>
  )
}

export default Services