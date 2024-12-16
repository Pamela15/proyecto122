import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Sucursales from './paginas/Sucursales';
import Informacion from './paginas/Informacion';
import Inicio from './paginas/Inicio';
import Productos from './paginas/Productos';
import Footer from './componentes/Footer';
import Mesas from './paginas/Mesas';
import Sillas from './paginas/Sillas';
import Comedores from './paginas/Comedores';
import Contactos from './paginas/Contactos';
import Sofas from './paginas/Sofas';
import Pedidos from './paginas/Pedidos';
import Creditos from './paginas/Creditos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/informacion' element={<Informacion />} />
          <Route path='/sucursales' element={<Sucursales />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/contactos' element={<Contactos />} />
          <Route path='/sillas' element={<Sillas />} />
          <Route path='/mesas' element={<Mesas />} />
          <Route path='/comedores' element={<Comedores />} />
          <Route path='/sofas' element={<Sofas />} />
          <Route path='/pedidos' element={<Pedidos />} />
          <Route path='/creditos' element={<Creditos/>} />



        </Routes>
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;