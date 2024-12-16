import React from 'react';
import {Link} from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg body-tertiary color">
  <div className="container-fluid color  ">
    <Link className="navbar-brand color" to="/">FORNITURE</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon color" ></span>
    </button>
    <div className="collapse navbar-collapse color" id="navbarNavDropdown">
      <ul className="navbar-nav color">
        <li className="nav-item color">
          <Link className="nav-link fontcolor" aria-current="page" to='/'> Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fontcolor" to='/Sucursales'>Sucursales</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fontcolor" to="/Informacion">Informacion</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fontcolor" to="/Productos">Productos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fontcolor" to="/Contactos">Contactos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fontcolor" to="/Creditos">Creditos</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle fontcolor"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Catalogo
          </Link>
          <ul className="dropdown-menu color">
            <li><Link className="dropdown-item fontcolor" to="/Sillas"> Sillas </Link></li>
            <li><Link className="dropdown-item fontcolor" to="/Mesas">Mesas</Link></li>
            <li><Link className="dropdown-item fontcolor" to="/Comedores">Comedores</Link></li>
            <li><Link className="dropdown-item fontcolor" to="/Sofas">Sofas</Link></li>
            <li><Link className="dropdown-item fontcolor" to="/Pedidos">Pedidos</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
export default Navbar;