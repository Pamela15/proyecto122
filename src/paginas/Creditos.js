import React from 'react'
import "./Creditos.css"
import imgcre from "../componentes/imgcre.jpg"
const Creditos = () => {
  return (
    <div className='crediP'>
        <div className='credito'> 
                <div className='cre1'><img src={imgcre} class="img-fluid rounded-start creT" alt="..."/>  </div>
                <div className='cre2'>
                <h3></h3>
                    <h3>Gracias por llegar hasta el final</h3>
                    <h3>Este es mi Proyecto de inf-122</h3>
                    <h3></h3>
                </div>
        
        </div>
    </div>
  )
}

export default Creditos