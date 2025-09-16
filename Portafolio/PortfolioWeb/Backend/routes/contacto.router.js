import contactoController from "../controller/contacto.controller.js";
import { Router } from "express";

const contactoRouter = new Router();

contactoRouter.post("/", contactoController.EnviarMail);

export default contactoRouter 