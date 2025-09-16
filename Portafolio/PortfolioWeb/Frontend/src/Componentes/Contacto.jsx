import '../styles/SobreMi.css'
import PersonaServicio from '../servicios/Persona.servicio.jsx'
import ContactoService from '../servicios/Contacto.service.jsx'
import { useState, useEffect } from 'react'
import {Formik,Form,Field,ErrorMessage, useFormik} from 'formik'
function Contacto(){
    const [FormularioEnviado, setFormularioEnviado] = useState(null);
    useEffect(() => {obtenerPersona()},[]);
    const [persona,setPersona] = useState([]);
    
    const obtenerPersona = async () =>{
        const persona = await PersonaServicio.obtenerPersona()
        setPersona(persona) 
        } 

    return(
    <>
    <section id="Contacto" className="container">

        <h3>Contacto</h3>

            <div className="row">
                <div className="col-4 datos">

                    <ul className="list-unstyled">
                        <li className="d-flex align-items-center mb-2">
                            <i className="bi bi-envelope-fill me-2"></i>
                            <span>{persona.correo}</span>
                        </li>

                        <li className="d-flex align-items-center">
                            <i className="bi bi-telephone-fill me-2"></i>
                            <span>{persona.tel}</span>
                        </li>

                        <li>
                            <i className="bi bi-linkedin me-2"></i>
                            <a href={persona.linkedin}>LinkedIn | Santiago Tissera</a>
                        </li>

                        <li>
                            <i className="bi bi-github me-2"></i>
                            <a href={persona.github}>GitHub | Santiago Tissera</a>
                        </li>
                    </ul>


                </div>
                <div className="col-7 formulario">
                    <Formik 
                        initialValues={{
                            nombre: '',
                            correo: '',
                            asunto: '',
                            mensaje: ''
                        }}
                        validate={(valores) => {
                            let errores = {};

                            //validacion de nombre
                            if(!valores.nombre){
                                errores.nombre = 'Por favor ingrese un nombre'
                            }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                                errores.nombre = 'Ingrese un nombre válido'
                            }

                            //validacion de correo
                            if(!valores.correo){
                                errores.correo = 'Ingrese un correo válido'
                            }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                                errores.correo = 'Ingrese un correo válido'
                            }

                            //validacion de asunto
                            if(!valores.asunto){
                                errores.asunto = 'El asunto del mensaje es requerido'
                            }
                            //validacion de mensaje
                            if(!valores.mensaje){
                                errores.mensaje = 'El mensaje es requerido'
                            }
                            return errores;
                        }}
                        onSubmit={async (values,{resetForm}) => {
                            try {
                                const data = await ContactoService.enviarForm(values);
                                if (data.success) {
                                    setFormularioEnviado(true);
                                    setTimeout(() => setFormularioEnviado(false),5000);
                                } else {
                                    setFormularioEnviado(false)
                                }
                             } catch (error) {
                                throw error
                            }
                            resetForm();
                        }}>
                        {({errors}) => (
                            <Form className="row g-6">
                                <div className='col-6 campo'>
                                    <label className='form-label' htmlFor="nombre">Nombre y Apellido</label>
                                        <div >
                                            <Field
                                                className="form-control" 
                                                type="text" 
                                                id="nombre" 
                                                name="nombre" 
                                                placeholder="John Doe" 
                                            />
                                            <ErrorMessage name="nombre" component={() => ( <div className='text-danger'> {errors.nombre}</div> )} />
                                            <hr />
                                        </div>
                                </div>
                            
                                <div className='col-6 campo'>
                                    <label className='form-label' htmlFor="email">Correo Electronico</label>
                                        <div>
                                            <Field
                                                className="form-control"  
                                                type="email"  
                                                id="correo" 
                                                name='correo'
                                                placeholder="example@gmail.com"
                                            />
                                            <ErrorMessage name="correo" component={() => ( <div className='text-danger'> {errors.correo}</div> )} />
                                            <hr />
                                        </div>
                                </div>
                                            
                                <div className='col-12 campo'>
                                    <label className='form-label' htmlFor="asunto">Asunto</label>
                                        <div >
                                            <Field
                                                className="form-control"
                                                type="text"
                                                name="asunto"
                                                id="asunto"
                                                placeholder="Asunto"
                                            />
                                            <ErrorMessage name="asunto" component={() => ( <div className='text-danger'> {errors.asunto}</div> )} />
                                            <hr />
                                        </div>
                                </div>

                                <div className='col-12 campo'>
                                    <label className='form-label' row='50' htmlFor="mensaje">Mensaje</label>
                                        <div>
                                            <Field 
                                                className="form-control"
                                                name="mensaje" 
                                                as="textarea" 
                                                id="mensaje" 
                                                placeholder="Escriba su mensaje">
                                            </Field>
                                            <ErrorMessage name="mensaje" component={() => ( <div className='text-danger'> {errors.mensaje}</div> )} />
                                        </div>
                                    <hr />
                                </div>
                                    
                                <div className="text-center">
                                    <button className="btn btn-primary" type='submit'>Enviar Formulario</button>
                                </div>    
                                    {FormularioEnviado && <p className='text-success'> ¡Formulario enviado con éxito! </p> }
                                </Form>
                            )}
                        </Formik>
                </div>

            </div>         
</section>
    </>
)}

export default Contacto