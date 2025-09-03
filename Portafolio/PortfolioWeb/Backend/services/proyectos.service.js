import Proyecto from '../models/Proyecto.js';

const getAllProyectos = async() =>{
    try {
        const proyectos = await Proyecto.findAll();
        return proyectos;
    } catch (error) {
        throw error
    }
}

export default {getAllProyectos}