import axios from "axios";

const Url = 'http://localhost:3000/api/proyecto'

const getAllProyectos = async(req,res) => {
    try {
        const proyectos = await axios.get(`${Url}`);
        return proyectos.data.data

    } catch (error) {
        throw error
    }
}

export default {getAllProyectos}