import Experiencia from '../models/Experiencia.js';

const getAllExperiencia = async() =>{
    try {
        const experiencias = await Experiencia.findAll();
        return experiencias
    } catch (error) {
        throw error
    }
}

export default {getAllExperiencia}