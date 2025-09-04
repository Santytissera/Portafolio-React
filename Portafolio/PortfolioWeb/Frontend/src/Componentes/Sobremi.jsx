import '../styles/SobreMi.css'
import PersonaServicio from '../servicios/Persona.servicio.jsx'
import { useState, useEffect } from 'react'
function SobreMi(){
    useEffect(() => {obtenerPersona()},[]);
    const [persona,setPersona] = useState([]);

    const obtenerPersona = async () =>{
        const persona = await PersonaServicio.obtenerPersona()
        setPersona(persona) 
    }
    return(
    <>            
        <section id="Inicio">
            <div className="container p-0">
                {/*Foto de portada */}
                <img src={persona.portada} className="cover-photo rounded-2" alt="Portada"/>

                {/*Foto de perfil*/}
                 <div className="container">
                 
                    <div className="row">
                        <div className="col">
                            <div className="profile-section">
                                <div className="profile-wrapper">
                                    <img src="src\assets\profile-img.jpg" className="profile-photo" alt="Perfil"/>
                                </div>

                                <div className="descripcion">
                                    <h2>{persona.nombre} {persona.apellido}</h2>
                                    <p>{persona.bio}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </section>
    </>
)}

export default SobreMi