import proyectosService from "../services/proyectos.service.js";

const getAllProyectos = async(req,res) =>{
    try {
        const proyectos = await proyectosService.getAllProyectos();
        res.send({status: "OK", data: proyectos});
    } catch (error) {
        res.status(500).send ({status:"FAILED", data: {error: error?.message || error}})
    return;
    }
}

export default {getAllProyectos}