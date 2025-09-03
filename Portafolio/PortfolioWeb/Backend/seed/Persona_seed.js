import { Sequelize, DataTypes } from "sequelize";
import fs from 'fs';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage:"./datos/datos.db",
});

 
 const Persona = sequelize.define('Persona',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido:{
        type:DataTypes.STRING,
        allowNull:false
    },
    bio:{
        type:DataTypes.STRING,
        allowNull:false
    },
    tel:{
        type:DataTypes.STRING,
        allowNull:false
    },
    correo:{
        type:DataTypes.STRING,
        allowNull:false
    },
    linkedin:{
        type:DataTypes.STRING,
        allowNull:false
    },
    github:{
        type:DataTypes.STRING,
        allowNull:false
    }
 },
{
    tableName: 'personas',
    timestamps: false
});

const inicializarDesdeJSON = async (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const personas = JSON.parse(data);

        if (!Array.isArray(personas) || personas.length === 0) {
            throw new Error('Archivo JSON vacío o no válido.');
        }

        await sequelize.sync({ force: true });
        await Persona.bulkCreate(personas);
    } catch (error) {
        console.error('Error cargando Persona:', error.message);
    } finally {
        await sequelize.close();
    }
};

export default {inicializarDesdeJSON}