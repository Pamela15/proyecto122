import React from 'react'
import "./Mesas.css"
import {Link} from 'react-router-dom';
import mesa1 from "../componentes/mesa1.jpg"
import mesa2 from "../componentes/mesa2.jpg"
import mesa3 from "../componentes/mesa3.jpg"
import mesa4 from "../componentes/mesa4.jpg"
import mesa5 from "../componentes/mesa5.jpg"
import mesa6 from "../componentes/mesa6.jpg"
const Mesas = () => {
  return (
    <div className='centroM'>
            <div className='mesa'>
              <div className='img1'>  <img src={mesa1} className="imaM" alt="..."/> </div>
                      <div className='text1'><h2>Mesa 1</h2> 
                      <h3>Ordenalo yaaaa!!!!!</h3>
                      <button type="button" class="btn btn-danger"><Link className="dropdown-item fontcolor" to="/Pedidos">Ir a Pedidos</Link></button>      </div>
              </div>
              <div className='mesa'>
              <div className='img1'>  <img src={mesa2} className="imaM" alt="..."/> </div>
                      <div className='text1'> 
                                <h2>Mesa 2</h2>
                                <h3>Ordenalo yaaaa!!!!!</h3>
                      <button type="button" class="btn btn-danger"><Link className="dropdown-item fontcolor" to="/Pedidos">Ir a Pedidos</Link></button>
                       </div>
              </div>
              <div className='mesa'>
              <div className='img1'>  <img src={mesa3} className="imaM" alt="..."/> </div>
                      <div className='text1'> <h2>Mesa 3</h2> 
                      <h3>Ordenalo yaaaa!!!!!</h3>
                      <button type="button" class="btn btn-danger"><Link className="dropdown-item fontcolor" to="/Pedidos">Ir a Pedidos</Link></button>      </div>
              </div>
              <div className='mesa'>
              <div className='img1'>  <img src={mesa4} className="imaM" alt="..."/> </div>
                      <div className='text1'> <h2>Mesa 4</h2> 
                      <h3>Ordenalo yaaaa!!!!!</h3>
                      <button type="button" class="btn btn-danger"><Link className="dropdown-item fontcolor" to="/Pedidos">Ir a Pedidos</Link></button>      </div>
              </div>
              <div className='mesa'>
              <div className='img1'>  <img src={mesa5} className="imaM" alt="..."/> </div>
                      <div className='text1'> <h2>Mesa 5</h2>
                      <h3>Ordenalo yaaaa!!!!!</h3>
                      <button type="button" class="btn btn-danger"><Link className="dropdown-item fontcolor" to="/Pedidos">Ir a Pedidos</Link></button>      </div>
              </div>
              <div className='mesa'>
              <div className='img1'>  <img src={mesa6} className="imaM" alt="..."/> </div>
                      <div className='text1'> <h2>Mesa 6</h2> 
                      <h3>Ordenalo yaaaa!!!!!</h3>
                      <button type="button" class="btn btn-danger"><Link className="dropdown-item fontcolor" to="/Pedidos">Ir a Pedidos</Link></button>      </div>
              </div>
              


    </div>
  )
}

export default Mesas