import axios from 'axios';

const Url = "http://localhost:3000/api/experiencia"

const obtenerExperiencia = async(req,res) =>{
    try {
        const experiencia = await axios.get(`${Url}`)
        return experiencia.data.data
    } catch (error) {
        throw error
    }
}

export default {obtenerExperiencia}