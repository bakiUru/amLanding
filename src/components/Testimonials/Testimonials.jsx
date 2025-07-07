import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/right-arrow_11461261.png'
import prev_icon from '../../assets/back-arrow_11461251.png'
import avatar from '../../assets/avatar1.jpg'


function Testimonials() {
    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if (tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}
const slideBackward = ()=>{
    if (tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
    console.log('right')
}



  return (
    <div className='testimonials'>
        <img src={next_icon} alt="flecha derecha icono" className='next-btn' onClick={slideForward}/>
        <img src={prev_icon} alt="flecha izquierda icono" className='prev-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={avatar} alt="avatar" />
                            <div>
                                <h3>Luis Carballo</h3>
                                <span>Montevideo, Uruguay</span>
                            </div>
                        </div>
                        <p>
                            "Excelente servicio, muy profesionales y atentos. Me ayudaron con la instalación eléctrica de mi nuevo hogar y todo quedó perfecto. ¡Recomendados!" 
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={avatar} alt="avatar" />
                            <div>
                                <h3>Sergio Caballo</h3>
                                <span>Montevideo, Uruguay</span>
                            </div>
                        </div>
                        <p>
                            "Muy satisfecho con el servicio. Los electricistas fueron puntuales, amables y resolvieron todos mis problemas eléctricos de manera rápida y eficiente. ¡Sin duda volveré a contratarlos!"
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={avatar} alt="avatar" />
                            <div>
                                <h3>Marta Zapallito</h3>
                                <span>San Jose, Uruguay</span>
                            </div>
                        </div>
                        <p>
                            "Excelente servicio, muy profesionales y atentos.!" 
                        </p>
                    </div>
                </li>
            </ul>
           
        </div>
    </div>
  )
}

export default Testimonials