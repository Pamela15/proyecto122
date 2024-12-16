import React from 'react'
import "./Comedores.css"
import {Link} from 'react-router-dom';
import comedor1 from "../componentes/comedor1.jpg"
import comedor2 from "../componentes/comedor2.jpg"
import comedor3 from "../componentes/comedor3.jpg"

const Comedores = () => {
  return (
    <div className='padreCo'>
      <div class="card mb-3 com1" >
  <div class="row g-0">
  <div class="col-md-4 ">
      <img src={comedor1} class="img-fluid rounded-start come" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Comedor 1</h5>
        <p class="card-text">Mesa de vidrio y sillas contemporáneas con líneas limpias. Elegancia minimalista con toques metálicos y lámparas colgantes geométricas.</p>
        <button type="button" class="btn btn-danger"><Link className="dropdown-item fontcolor" to="/Pedidos">Ir a Pedidos</Link></button>  
        
      </div>
    </div>
  </div>
</div>
<div class="card mb-3 com1" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={comedor2} class="img-fluid rounded-start come"  alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Comedor 2</h5>
        <p class="card-text">Mesa de madera envejecida y sillas robustas. Estilo campestre con detalles de hierro forjado y lámpara de araña rústica.</p>
        <button type="button" class="btn btn-danger"><Link className="dropdown-item fontcolor" to="/Pedidos">Ir a Pedidos</Link></button>  
        
      </div>
    </div>
  </div>
</div>
<div class="card mb-3 com1" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={comedor3} class="img-fluid rounded-start come" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Comedor 3</h5>
        <p class="card-text">Mesa de madera noble, sillas tapizadas en terciopelo y detalles ornamentales. Elegancia atemporal con candelabro de cristal.</p>
        <button type="button" class="btn btn-danger"><Link className="dropdown-item fontcolor" to="/Pedidos">Ir a Pedidos</Link></button>  
        
      </div>
    </div>
  </div>
</div>




    </div>
  )
}

export default Comedores