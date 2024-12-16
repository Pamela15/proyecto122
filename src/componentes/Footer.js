import React from 'react'
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <div className="container">
  <footer className="py-3 ">
    <ul className="nav justify-content-center border-bottom   pb-3 mb-3">
      <li className="nav-item">  <Link className="dropdown-item fontcolor" to="/"> Inicio</Link></li>
      <li className="nav-item"><Link className="dropdown-item fontcolor" to="/sucursales"> Sucursales</Link></li>
      <li className="nav-item"><Link className="dropdown-item fontcolor" to="/contactos">  Contactos</Link></li>
      <li className="nav-item"><Link className="dropdown-item fontcolor" to="/productos">   Productos</Link></li>
      <li className="nav-item"><Link className="dropdown-item fontcolor" to="/informacion">  Informacion</Link> </li>
    </ul>
    <p className="text-center  text-body-secondary">&copy; 2024 realiza tu pedido con Forniture</p>
  </footer>
</div>
  )
}

export default Footer