import React from 'react'
import "./Contactos.css"
import { useState } from 'react';
import contacto1 from "../componentes/contactos1.jpg"
import contacto2 from "../componentes/contacto2.jpg"
import contacto3 from "../componentes/contacto3.jpg"

const Contactos = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [motivo, setMotivo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const EnviarMensaje = () => {
    const NroCelular = "+59169794341";

    if (nombre.trim() === '') {
      console.error("Nombre vacío");
      return;
    }

    const url = "https://wa.me/" + NroCelular + "?text=" +
      "Hola soy  " + nombre+" "+apellido + "%0a" +
       "Le escribo por el siguiente motivo: " + motivo + "%0a" +
      " "+mensaje;

    const nuevaVentana = window.open(url, '_blank');

  // Verificar si la ventana se abrió correctamente antes de llamar a focus
  if (nuevaVentana) {
    nuevaVentana.focus();
  } else {
    console.error("No se pudo abrir la ventana");
  }
  };





  return (
    <div className='contacP'>
      <div className='contacto'>
          <div className='contacto1'> 
              <form className='formu'>
                <h1 className='Titulo'>Contactanos aqui</h1>
                <h3>Llene los Campos</h3>
              <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Nombres</label>
  <input name='nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} type="email" class="form-control" id="exampleFormControlInput1" placeholder="Juan Carlos"/>
  <label for="exampleFormControlInput1" class="form-label">Apellidos</label>
  <input name='apellido' value={apellido} onChange={(e) => setApellido(e.target.value)} type="email" class="form-control" id="exampleFormControlInput1" placeholder="Bodoque Caballero"/>
  <label for="exampleFormControlInput1" class="form-label">Motivo del Mensaje</label>
  <input name='motivo' value={motivo} onChange={(e) => setMotivo(e.target.value)} type="email" class="form-control" id="exampleFormControlInput1" placeholder="Asunto"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Mensaje</label>
  <textarea  name='mensaje' value={mensaje} onChange={(e) => setMensaje(e.target.value)} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button type="button" onClick={EnviarMensaje} class="btn btn-danger">Enviar </button>

          </form>
          </div>
          <div className='contacto1'> 
          <div className='carruselc'>
          <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={contacto1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={contacto2}  class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={contacto3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

          </div>
          

          </div>
      </div>






    </div>
  )
}

export default Contactos