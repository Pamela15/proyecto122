import React from 'react'
import "./Pedidos.css"
import VideoM from "../componentes/videoM.mp4"
import VideoM2 from "../componentes/videoM2.mp4"
import { useState } from 'react';



const Pedidos = () => {

  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('');
  const [estilo, setEstilo] = useState('');
  const [color, setColor] = useState('');
  const [numero, setNumero] = useState('');
  const [fecha, setFecha] = useState('');

  const EnviarMensaje = () => {
    const NroCelular = "+59169794341";

    if (nombre.trim() === '') {
      console.error("Nombre vacío");
      return;
    }

    const url = "https://wa.me/" + NroCelular + "?text=" +
      "Mi nombre es " + nombre + "%0a" +
      "Quiero del tipo: " + tipo + " con un estilo: " + estilo + " con color: " + color + "%0a" +
      "Que está en el número de catálogo: " + numero + ". Quiero mi entrega en " + fecha;

    const nuevaVentana = window.open(url, '_blank');

  // Verificar si la ventana se abrió correctamente antes de llamar a focus
  if (nuevaVentana) {
    nuevaVentana.focus();
  } else {
    console.error("No se pudo abrir la ventana");
  }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    EnviarMensaje();
  };

  
  return (
    <div className='pediP'>
      <div className='pedi'>
      <h1>Realizar Pedido</h1>
      <form className="row gy-2 gx-3 align-items-center pedido" onSubmit={handleSubmit}>
  <div className="col-auto">
  <label for="exampleFormControlInput1" className="form-label">Nombre</label>
    <label className="visually-hidden" for="autoSizingInput">Name</label>
    <input type="text" name="nombre" className="form-control tama" id="autoSizingInput" placeholder="Pamela Encinas" onChange={(e) => setNombre(e.target.value)}/>
  
  </div>
  <div className="col-auto">
  <label for="exampleFormControlInput1" className="form-label">Clase de mueble</label>
    <label className="visually-hidden" for="autoSizingInputGroup">Username</label>
    <div className="input-group tama">
      <div className="input-group-text ">Tipo</div>
      <input type="text" name="tipo" className="form-control " id="autoSizingInputGroup" placeholder="Mesa Rustica" onChange={(e) => setTipo(e.target.value)}/>
    </div>
  </div>
  <div className="col-auto">
  <label for="exampleFormControlInput1" className="form-label">Escoga Estilo</label>

    <label className="visually-hidden" for="autoSizingSelect">Preference</label>
    <select className="form-select" id="autoSizingSelect" name='estilo' onChange={(e) => setEstilo(e.target.value)}>
      <option selected>Escoge</option>
      <option value="1">Clasica</option>
      <option value="2">Moderna</option>
      <option value="3">Aestetic</option>
    </select>
  </div>
  <div className="col-auto">
  <label for="exampleFormControlInput1" className="form-label" >Color</label>
    <label className="visually-hidden" for="autoSizingSelect">Preference</label>
    <select className="form-select" id="autoSizingSelect" name='color' onChange={(e) => setColor(e.target.value)}>
      <option selected>Seleccione</option>
      <option value="1">Cafe</option>
      <option value="2">Plomo</option>
      <option value="3">Beige</option>
    </select>
  </div>
  <div className="col-auto">
  <label for="exampleFormControlInput1" className="form-label">Numero Catalogo</label>  
    <label className="visually-hidden" for="autoSizingSelect">Preference</label>
    <select className="form-select" id="autoSizingSelect" name='numero' onChange={(e) => setNumero(e.target.value)}>
      <option selected> Seleccione</option>
      <option value="1">Uno</option>
      <option value="2">Dos</option>
      <option value="3">Tres</option>
    </select>
  </div>
  <div className='col-auto'> 
  <label for="exampleFormControlInput1" className="form-label">Fecha de Entrega</label>
        <input type='date' name="fecha" className="form-control " id="autoSizingInputGroup"
   onChange={(e) => setFecha(e.target.value)}/>
  </div>
  
  <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Espeficaciones Extra</label>
  <input type="email" className="form-control tama" id="exampleFormControlInput1" placeholder="Especifique sus cambios "/>
</div>
<div className="mb-3"></div>
  <div className="col-auto">
    <button type="submit" className="btn btn-danger" onClick={() => EnviarMensaje()}>Submit</button>
  </div>
</form>
      </div>
      <div className='pedi1 col-auto'>
        <video src={VideoM} className='video1' autoPlay loop muted />
        <video src={VideoM2} className='video1' autoPlay loop muted />
      </div>




    </div>
  )
}

export default Pedidos