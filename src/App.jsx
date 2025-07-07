import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import { Hero } from './components/Hero/Hero.jsx'
import Services from './components/ServicesW/Services.jsx'
import Title from './components/Title/Title.jsx'
import About from './components/About/About.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import VideoPlayer from './components/VideoPlayer/VideoPlayer.jsx'

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Areas Especializadas' title='Servicios que Ofrecemos '/>
        <Services/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Galleria' title='Casos de Exito'/>
        <Gallery/>
        <Title subTitle='Testimonios' title='Hablan nuestros Clientes'/>
        <Testimonials/>
        <Title subTitle='Contactanos' title='Estamos en Contacto'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App