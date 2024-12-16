import React from 'react'
import "./Sillas.css"
import {Link} from 'react-router-dom';
import silla1 from "../componentes/silla1.jpg"
import silla2 from "../componentes/silla2.jpg"
import silla3 from "../componentes/silla3.jpg"
import silla4 from "../componentes/silla4.jpg"
import silla5 from "../componentes/silla5.jpg"
import silla6 from "../componentes/silla6.jpg"
const Sillas = () => {
  return (
    <div className='padreS'>
     <div className='sillas'>
     <div className="card tamC" >
  <img src={silla1} className="card-img-top imgC " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link className="btn btn-danger dropdown-item fontcolor" to="/Pedidos">Ir a Pedidos</Link>
  </div>
  
</div>
<div className="card tamC" >
  <img src={silla2} className="card-img-top imgC " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link className="dropdown-item fontcolor" to="/Pedidos">Ir a Pedidos</Link>
  </div>
  
</div>
<div className="card tamC" >
  <img src={silla3} className="card-img-top imgC " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <Link className="dropdown-item fontcolor" to="/Pedidos">Ir a Pedidos</Link>
  </div>
  
</div>
<div className="card tamC" >
  <img src={silla4} className="card-img-top imgC " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link className="dropdown-item fontcolor" to="/Pedidos">Ir a Pedidos</Link>
  </div>
  
</div>
<div className="card tamC" >
  <img src={silla5} className="card-img-top imgC " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <Link className="dropdown-item fontcolor" to="/Pedidos">Ir a Pedidos</Link>
  </div>
  
</div>
<div className="card tamC" >
  <img src={silla6} className="card-img-top imgC " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link className=" btn btn-danger dropdown-item fontcolor" to="/Pedidos">Ir a Pedidos</Link>
  </div>
  
</div>


     </div>



    </div>
  )
}

export default Sillas