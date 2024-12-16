import React from 'react'
import "./Sofas.css"
import {Link} from 'react-router-dom';
import sofa1 from "../componentes/sofa1.jpg"
import sofa2 from "../componentes/sofa2.jpg"
import sofa3 from "../componentes/sofa3.jpg"
const Sofas = () => {
  return (
    <div className='sofasP'>
      <div className="card mb-3 tamSo">
  <img src={sofa1} className="card-img-top imaS" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Sofa 1</h5>
    <p className="card-text">Sofá de líneas rectas y diseño minimalista con tapicería en tonos neutros. Patas metálicas y cojines integrados para un estilo contemporáneo y funcionalidad.</p>
    <button type="button" className="btn btn-danger"><Link className="dropdown-item fontcolor" to="/Pedidos">Ir a Pedidos</Link></button>
  </div>
</div>
<div className="card mb-3 tamSo">
  <img src={sofa2} className="card-img-top imaS" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Sofa 2</h5>
    <p className="card-text">Sofá de tres plazas con tapizado en cuero capitoné y brazos enrollados distintivos. Patas de madera tallada y un respaldo elegante para un toque clásico y sofisticado.</p>
    <button type="button" className="btn btn-danger"><Link className="dropdown-item fontcolor" to="/Pedidos">Ir a Pedidos</Link></button>
  </div>
</div>
<div className="card mb-3 tamSo">
  <img src={sofa3} className="card-img-top imaS" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Sofa 3</h5>
    <p className="card-text">Sofá modular con secciones ajustables para múltiples configuraciones. Tapizado en tela suave y cojines extraíbles. Perfecto para adaptarse a diferentes espacios y necesidades.</p>
    <button type="button" className="btn btn-danger"><Link className="dropdown-item fontcolor" to="/Pedidos">Ir a Pedidos</Link></button>
  </div>
</div>

      </div>
  )
}

export default Sofas