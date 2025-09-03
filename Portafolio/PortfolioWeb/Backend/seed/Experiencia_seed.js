import { Sequelize, DataTypes } from "sequelize";
import fs from 'fs';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: "./datos/datos.db",
});

const Experiencia = sequelize.define('Experiencia',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    empresa:{
        type:DataTypes.STRING,
        allowNull:false
    },
    puesto:{
        type:DataTypes.STRING,
        allowNull:false
    },
    fechaini:{
        type:DataTypes.STRING,
        allowNull:false
    
    },
    fechafin:{
        type:DataTypes.STRING,
        allowNull:false
    },
    descr:{
        type:DataTypes.STRING,
        allowNull:false
    }
},
{
    tableName: 'experiencia',
    timestamps: false
})

const inicializarDesdeJSON = async (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const experiencias = JSON.parse(data);

        if (!Array.isArray(experiencias) || experiencias.length === 0) {
            throw new Error('Archivo JSON vacío o no válido.');
        }

        await sequelize.sync({ force: true });
        await Experiencia.bulkCreate(experiencias);
    } catch (error) {
        console.error('Error cargando Experiencias:', error.message);
    } finally {
        await sequelize.close();
    }
};

export default {inicializarDesdeJSON}