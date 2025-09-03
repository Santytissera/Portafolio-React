import Navegacion from './Componentes/Navegacion.jsx'
import SobreMi from './Componentes/Sobremi.jsx'
import Experiencia from './Componentes/Experiencia/Experiencia.jsx'
import Proyectos from './Componentes/Proyectos/Proyectos.jsx'
import Contacto from './Componentes/Contacto.jsx'
import Footer from './Componentes/Footer.jsx'
import './index.css'

function App() {

  return (
    <div className='main'>
      <Navegacion></Navegacion>
      <SobreMi></SobreMi>
      <Experiencia></Experiencia>
      <Proyectos></Proyectos>
      <Contacto></Contacto>
      <Footer></Footer>
    </div>
  )
}

export default App
