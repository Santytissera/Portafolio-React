import { Router } from "express";
import experienciaController from "../controller/experiencia.controller.js";

const experienciaRouter = new Router();

experienciaRouter.get("/",experienciaController.getAllExperiencia);


export default experienciaRouter