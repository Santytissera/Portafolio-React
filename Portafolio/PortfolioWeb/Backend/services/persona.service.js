import Persona from '../models/Persona.js'

const getPersona = async(id) =>{
    try {
        const persona = await Persona.findByPk(id);
        return persona;
    } catch (error) {
        throw error;
    }

}

export default {getPersona}