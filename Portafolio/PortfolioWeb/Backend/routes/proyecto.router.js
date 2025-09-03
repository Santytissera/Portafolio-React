import { Router } from "express";
import proyectoController from "../controller/proyecto.controller.js";

const proyectoRouter = new Router();

proyectoRouter.get("/",proyectoController.getAllProyectos);

export default proyectoRouter