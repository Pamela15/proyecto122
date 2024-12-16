import React from 'react'
import "./Productos.css"
import producto1 from "../componentes/producto1.jpg"
import producto2 from "../componentes/producto2.jpg"
import producto3 from "../componentes/producto3.jpg"
import producto4 from "../componentes/producto4.jpg"


const Productos = () => {
  return (
    <div >

      <div className='tarjetas '> 
      <div class="card mb-3 h-25 productoB" >
  <div class="row g-0">
    <div class="col-md-4  "><img src={producto2} class="img-fluid rounded-start imgTam" alt="..."/>
      
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title ">Sofá Cama</h5>
        <p class="card-text">Sofá Cama Multifuncional - Comodidad y Estilo en un Solo Mueble<br/> </p>
        <p>Diseño versátil: Sofá durante el día, cama cómoda por la noche. Perfecto para visitas inesperadas o para optimizar espacios pequeños.</p>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3 h-25 productoB" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={producto3} class="img-fluid rounded-start imgTam " alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body ">
        <h5 class="card-title">Silla</h5>
        <p class="card-text">La silla es un asiento con respaldo y patas diseñado para proporcionar comodidad y apoyo. Puede tener diversos estilos y ma<br/>-teriales, desde madera hasta metal, y se adapta tanto a espacios de comedor como a áreas de descanso.</p>
       
      </div>
    </div>
  </div>
</div>
<div class="card mb-3 h-25 productoB" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={producto4} class="img-fluid rounded-start imgTam" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body ">
        <h5 class="card-title">Ropero</h5>
        <p class="card-text">El ropero es un mueble de almacenamiento vertical con puertas que se utiliza para organizar y guardar ropa y accesorios.y<br/> Con estantes y perchas, ofrece una solución práctica  ordenada para mantener la ropa en perfecto estado.</p>
        
      </div>
    </div>
  </div>
</div>
<div class="card mb-3 h-25 productoB" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={producto1} class="img-fluid rounded-start imgTam" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body ">
        <h5 class="card-title">Comedor</h5>
        <p class="card-text">El comedor es un conjunto de muebles que incluye una mesa y sillas, diseñado para la comida en familia o eventos sociales. </p>
        
      </div>
    </div>
  </div>
</div>
      


      </div>


    </div>
  )
}

export default Productos