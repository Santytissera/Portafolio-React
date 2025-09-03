import CardProyecto from './CardProyecto.jsx'
import { useEffect, useState } from 'react'
import ProyectoServicio from '../../servicios/Proyecto.servicio.jsx';
function Proyectos(){
    useEffect(() => {getAllProyectos()},[]);
    const [proyecto, setproyectos] = useState([]);

    const getAllProyectos = async(req,res) => {
        const data = await ProyectoServicio.getAllProyectos()
        setproyectos(data)
    }

    return(
    <>
        <section id="Proyectos" className='container'>
            
            <h3>Proyectos</h3>
            <div className="container d-flex align-items-center justify-content-between flex-wrap">
            {proyecto.map((p) => (
                    <CardProyecto key={p.id} proyecto={p}></CardProyecto>
            ))}
            </div>
            
        </section>
    </>
    )
}

export default Proyectos