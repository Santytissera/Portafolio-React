import express from 'express';
import cors from 'cors';
import personaRouter from './routes/persona.router.js';
import experienciaRouter from './routes/experiencia.router.js';
import proyectoRouter from './routes/proyecto.router.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())
app.use(express.static('../frontend'));

app.use('/api/persona/', personaRouter)
app.use('/api/experiencia/', experienciaRouter)
app.use('/api/proyecto/', proyectoRouter)

app.listen(port, ()=>{
    console.log(`El servidor está escuchando peticiones en el puerto: ${port}`)
})
