import React, { useState } from 'react';
import './Contact.css'
import msg_icon from '../../assets/correo-electronico.png'
import correo_icon from '../../assets/correo.png'
import telefono_icon from '../../assets/llamada-telefonica.png'
import ubicacion_icon from '../../assets/marcador-de-posicion.png'
import enviando_icon from '../../assets/enviando.png'

function Contact() {
    // ENVIO DE CORREO POR SERVICIO DE WEb3
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9efe8a8b-d105-4a8f-bbfe-cbc9d8fc6ec3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(`Mensaje Enviado Correctamente`);
      event.target.reset();
    } else {
      console.log("Error Al enviar el mensaje---->", data);
      setResult("Ocurrio un Error... Ups =/");
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Envienos un Mensaje <img src={msg_icon} alt="icono mensaje" /></h3>
            <p>Si tiene alguna pregunta o desea solicitar un presupuesto, no dude en ponerse en contacto con nosotros. Estamos aquí para ayudarle.</p>
            <ul>
                <li><img src={correo_icon} alt="icono correo" />am.electro.tecnia@gmail.com</li>
                <li><img src={telefono_icon} alt="icono telefono" />099 099 099</li>
                <li><img src={ubicacion_icon} alt="icono ubicacion" />Montevideo, Uruguay</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label htmlFor="nombre">Tu Nombre</label>
                <input type="text" name='nombre' placeholder='Ingrese su Nombre' required />
                <label htmlFor="telefono">Telefono</label>
                <input type="text" name='telefono' placeholder='Ingrese su Numero de Telefono' required />
                <label htmlFor="mensaje">Escriba su Mensaje Aqui</label>
                <textarea name="mensaje" rows="6" placeholder='Escriba su mensaje...' required></textarea>
                <button type='submit' className='btn dark-btn'>Enviar Mensaje<img src={enviando_icon} alt="icono envio" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact