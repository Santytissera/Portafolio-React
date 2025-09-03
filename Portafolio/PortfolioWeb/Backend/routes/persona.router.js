import { Router } from "express";
import personaController from "../controller/persona.controller.js";

const personaRouter = new Router();

personaRouter.get("/:id",personaController.getPersona)


export default personaRouter