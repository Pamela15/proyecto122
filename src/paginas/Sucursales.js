import React from 'react';
import "./Sucursales.css";
import sucursal1 from "../componentes/sucursal1.jpg"
import sucursal2 from "../componentes/sucursal2.jpg"
import sucursal3 from "../componentes/sucursal3.jpg"
import ubicacion1 from "../componentes/ubicacion1.jpg"
import ubicacion2 from "../componentes/ubicacion2.jpg"
import ubicacion3 from "../componentes/ubicacion3.jpg"

const Sucursales = () => {
  return (
    
    <div className='cajaP1'>
      <div>
        <div className='caja'> 
          <div className='caja1'> 
          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={sucursal1} class="d-block tamS" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={sucursal2} class="d-block  tamS" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={sucursal3} class="d-block  tamS" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
          
          
           </div>
         </div>
        
      </div>
      <div className='caja2'>
              <div className='caja21'>
              <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active tamU">
      <img src={ubicacion1} class="d-block w-100 " alt="..."/>
    </div>
    <div class="carousel-item tamU">
      <img src={ubicacion2}  class="d-block w-100 " alt="..."/>
    </div>
    <div class="carousel-item tamU">
      <img src={ubicacion3}  class="d-block w-100 " alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
             
                  



              </div>
              <div className='caja22'>
              <p className='textoSucur'>
                          
                        <p> 
                        <h2>Ubicaciones</h2> <br />

Calle Ficticia 123
<br />
Avenida Imaginaria
Boulevard de Sueños
<br />
Ciudades Inventadas:
<br /> 
Ciudad Ficción
<br />
Pueblo Imaginario
<br />
Villa de Ensueño
<br />
Códigos Postales:
<br />
Coordenadas ficticias como (latitud: 12.345, longitud: -67.890).  

                        </p>
                        
                      </p>

              </div>
      </div>
      <div className='caja3'>
            <div className='caja31'> 
                  <p>
                    <h5>
                    Mirá nuestro catálogo de muebles en Bolivia
                    </h5>

                  </p>
                  <p>
                  Desde sofás hasta mesas de comedor, nuestra tienda tiene todo lo que necesitas para hacer de tu hogar un espacio acogedor y funcional.
                  </p>
                  <p>
                  Como líderes en el mercado de muebles en Bolivia, ofrecemos una variedad de estilos para satisfacer las necesidades de nuestros clientes. 
                  </p>
                  <p>
                  Además, nuestros precios competitivos y la alta calidad de nuestros productos nos distinguen de la competencia. Puedes confiar en nosotros para encontrar los muebles que necesitas para tu hogar, sin gastar una fortuna.
                  </p>

            </div>

      </div>


      
    </div>


  )
}

export default Sucursales