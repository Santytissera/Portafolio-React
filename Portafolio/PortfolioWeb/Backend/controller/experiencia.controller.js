import experienciaService from "../services/experiencia.service.js";

const getAllExperiencia = async(req,res) =>{
    try {
        const experiencia = await experienciaService.getAllExperiencia();
        res.send({status: "OK", data: experiencia});
    } catch (error) {
        res.status(500).send ({status:"FAILED", data: {error: error?.message || error}})
        return;
    }
}

export default {getAllExperiencia}