import React from 'react'
import "./Informacion.css"
import mueble1 from "../componentes/mueble1.jpeg"
import mueble2 from "../componentes/mueble2.jpg"
import mueble3 from "../componentes/mueble3.jpg"
const Informacion = () => {
  return (
    <div className='pbox'>
      <div className='box'>
       
       <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={mueble1} className="d-block w-100 tam" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={mueble2} className="d-block w-100  tam" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={mueble3} className="d-block w-100 tam" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className='perfiles '>
<ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"> Nosotros</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Mision</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Destacados</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" >Compromiso</button>
  </li>
</ul>
<div className="tab-content " id="pills-tabContent">
  <div className="tab-pane fade show active " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
      <p >
      

Descripción de la Empresa:
 Somos una empresa dedicada a la fabricación y venta de muebles de alta calidad y diseño innovador.  cada pieza es cuidadosamente elaborada para satisfacer los gustos más exigentes.

      </p>


  </div>
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
      <p>
      Misión:
Nuestra misión es proporcionar a nuestros clientes muebles excepcionales que transformen sus espacios en ambientes elegantes y acogedores. Nos esforzamos por superar las expectativas en términos de calidad, servicio al cliente y diseño

Visión:
Aspiramos a ser reconocidos como líderes en la industria del mobiliario, ofreciendo una amplia gama de productos que se adapten a diversos estilos y necesidades. Buscamos expandir nuestra presencia a nivel nacional e internacional

      </p>

  </div>
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
    <p>
    Productos Destacados: <br/>
 Conjuntos de Sala de Estilo Contemporáneo<br/>
 Muebles Modulares para Espacios Reducidos<br/>
 Mesas y Sillas de Comedor de Alta Gama<br/>
 Accesorios Decorativos y Lámparas Exclusivas<br/>
    </p>

  </div>
  <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">
  Compromiso Ambiental:
En Muebles Elegantes S.A., estamos comprometidos con la sostenibilidad ambiental. Utilizamos materiales reciclables y maderas provenientes de fuentes sostenibles en la fabricación de nuestros muebles. Buscamos constantemente formas de reducir nuestro impacto ambiental y promovemos prácticas responsables en toda nuestra cadena de suministro.
  </div>
</div>
 
</div>
    <div className='acordeon'>
      
    <div className="accordion" id="accordionExample">
  <div className="accordion-item bg-danger">
    <h2 className="accordion-header">
      <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Sucursales
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body ">
        <strong>1. Sucursal Principal , 2. Sucursal en las Montañas ,3. Sucursal Costera-</strong>  "Vanguardia Urbana"

Ubicada en el corazón de la ciudad, "Vanguardia Urbana" te ofrece muebles modernos y sofisticados para un estilo de vida contemporáneo.

 - "Naturaleza Hogareña"

Sumérgete en la tranquilidad de "Naturaleza Hogareña", nuestra sucursal rodeada de naturaleza, donde encontrarás muebles rústicos que transformarán tu espacio en un refugio sereno.

 - "Mar y Comodidad"

Con vistas al océano, "Mar y Comodidad" combina el diseño contemporáneo con toques náuticos para brindarte opciones frescas y relajadas que capturan la esencia de la vida costera.
      </div>
    </div>
  </div>
  <div className="accordion-item  bg-danger">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Formas de entrega
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>1. Envío a Domicilio Rápido y Seguro,2. Retiro en Tienda,3. Entrega Express,4. Programación de Entrega Personalizada </strong> 

Recibe tus compras directamente en casa con nuestro servicio estándar de entrega.



Ordena en línea y recoge tus productos en la tienda más cercana cuando desees.

 (En áreas seleccionadas)

Recibe tus artículos en tiempo récord en áreas específicas.



Elige el día y la hora que mejor te convenga para recibir tus muebles.
      </div>
    </div>
  </div>
  <div className="accordion-item bg-danger">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Profesionalismo
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>1. Asesoramiento Especializado</strong> 

Nuestro equipo de expertos en muebles está aquí para ofrecerte asesoramiento personalizado, respondiendo a tus preguntas y guiándote a través de las opciones disponibles.
      </div>
    </div>
  </div>
</div>

    </div>


    </div>


    
    </div>
    


  )
}

export default Informacion