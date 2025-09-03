import personaService from "../services/persona.service.js";

const getPersona = async (req, res) => {
    const id = req.params.id;
    try {
        const persona = await personaService.getPersona(id);
        res.send({status: "OK", data: persona});
    } catch (error) {
        res.status(500).send ({status:"FAILED", data: {error: error?.message || error}})
        return;
    }
}

export default {getPersona}