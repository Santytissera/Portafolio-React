import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import personaRouter from './routes/persona.router.js';
import experienciaRouter from './routes/experiencia.router.js';
import proyectoRouter from './routes/proyecto.router.js';
import contactoRouter from './routes/contacto.router.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())
app.use(express.static('../frontend'));
dotenv.config();

app.use('/api/persona/', personaRouter)
app.use('/api/experiencia/', experienciaRouter)
app.use('/api/proyecto/', proyectoRouter)
app.use('/enviar',contactoRouter)

app.listen(port, ()=>{
    console.log(`El servidor está escuchando peticiones en el puerto: ${port}`)
})
