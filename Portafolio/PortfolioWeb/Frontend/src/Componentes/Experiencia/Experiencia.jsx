import ExperienciaRow from "../Experiencia/ExperienciaRow.jsx"
import { useState, useEffect } from "react"
import ExperienciaServicio from "../../servicios/Experiencia.servicio.jsx"
function Experiencia(){
    useEffect(() => {obtenerExperiencia()},[])
    
    const[experiencia,setExperiencia] = useState([])
    
    const obtenerExperiencia = async() =>{
        const data = await ExperienciaServicio.obtenerExperiencia()
        setExperiencia(data)
    }


    return(
    <>
        <section id="Experiencia">

            <div className="container experiencia">
                <h3>Experiencia</h3>

                {experiencia.map((e) => (
                    <ExperienciaRow key={e.id} experiencia={e}></ExperienciaRow>
                ))}            
            </div>


        </section>
    </>
)}

export default Experiencia