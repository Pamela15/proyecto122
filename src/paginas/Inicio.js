import React from 'react'
import "./Inicio.css"
import {Link} from 'react-router-dom';
import { useState } from 'react';
import inicio1 from "../componentes/inicio1.jpg"
import inicio2 from "../componentes/inicio2.jpg"
import inicio3 from "../componentes/inicio3.jpg"
const Inicio = () => {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const EnviarMensaje = () => {
    const NroCelular = "+59169794341";

    if (nombre.trim() === '') {
      console.error("Nombre vacío");
      return;
    }

    const url = "https://wa.me/" + NroCelular + "?text=" +
      "Mi nombre es " + nombre + "%0a" +
      " mi consulta es : " +mensaje; 

    const nuevaVentana = window.open(url, '_blank');

  // Verificar si la ventana se abrió correctamente antes de llamar a focus
  if (nuevaVentana) {
    nuevaVentana.focus();
  } else {
    console.error("No se pudo abrir la ventana");
  }
  };
  return (
    <div className='centro'>
      <div className='bienvenida'> 
              <div className='hijo1'>
                <div className='IniCentro'>

                <label>
                <h2>Expertos En Muebles</h2>  
                <p className='textIniC'>lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit.,
            Pellentesque eget commodo justo. Nullam vel urna sed dolor,
            imperdiet commodo.
            lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit.,
            Pellentesque eget commodo justo. Nullam vel urna sed dolor,
            imperdiet commodo.</p>
        
                </label>
                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">habla con un experto </button>

<div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content IniModal">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">New message</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">Nombres y apellido:</label>
            <input name='nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" className="form-control" id="recipient-name"/>
          </div>
          <div className="mb-3">
            <label for="message-text" className="col-form-label">Mensaje</label>
            <textarea name='mensaje' value={mensaje} onChange={(e) => setMensaje(e.target.value)} className="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button"  className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" onClick={EnviarMensaje} className="btn btn-danger">Enviar</button>
      </div>
    </div>
  </div>
</div>

                </div>
                  

              </div>
              <div className='hijo2'>
              <div className="imgIni"><img src={inicio1} className="img-fluid rounded-start " alt="..."/>
      
    </div>
              </div>

      </div>
      <div className='bienvenida'> 
              <div className='hijo3'>
              <div className=""><img src={inicio2} className="img-fluid rounded-start imgIni" alt="..."/>
      
      </div>

              </div>
              <div className='hijo4'>
                    
              <div className='IniCentro'>

<label>
<h2>Decora tu Hogar Con lo Mejor </h2>  
<p className='textIniC'>lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit.,
Pellentesque eget commodo justo. Nullam vel urna sed dolor,
imperdiet commodo.
lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit.,
Pellentesque eget commodo justo. Nullam vel urna sed dolor,
imperdiet commodo.</p>

</label>
<button type="button" className="btn btn-danger"  ><Link className="nav-link fontcolor" to="/Productos">Dale Un Vistaso a nuestros productos</Link></button>



</div>


              </div>
      </div>
      <div className='bienvenida'> 
              <div className='hijo3'>

              <div className='IniCentro'>

<label>
<h2>Se Realizan Pedidos y Entregas</h2>  
<p className='textIniC'>lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit.,
Pellentesque eget commodo justo. Nullam vel urna sed dolor,
imperdiet commodo.
lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit.,
Pellentesque eget commodo justo. Nullam vel urna sed dolor,
imperdiet commodo.</p>

</label>
<button type="button" className="btn btn-danger" ><Link className="dropdown-item fontcolor" to="/Pedidos">Realiza tu Pedida Yaa!!!</Link></button>


</div>

              </div>
              <div className='hijo4'>
              <div className=""><img src={inicio3} className="img-fluid rounded-start imgIni" alt="..."/>
      
      </div>
                
              </div>
      </div>


      
    </div>
    
  )
}

export default Inicio