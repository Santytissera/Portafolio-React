import seedPersona from './Persona_seed.js';
import seedExperiencia from './Experiencia_seed.js';
import seedProyecto from './Proyecto_seed.js';
await seedPersona.inicializarDesdeJSON('./seed/Persona.json');
await seedExperiencia.inicializarDesdeJSON('./seed/Experiencia.json');
await seedProyecto.inicializarDesdeJSON('./seed/Proyectos.json');