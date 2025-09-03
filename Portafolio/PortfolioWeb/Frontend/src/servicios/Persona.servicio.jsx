import axios from 'axios';

const Url = "http://localhost:3000/api/persona/1";

const obtenerPersona = async() =>{
    try {
        const persona = await axios.get(`${Url}`);
        return persona.data.data
    } catch (error) {
        throw error
    }
}

export default {obtenerPersona}