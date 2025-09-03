import { Sequelize, DataTypes } from 'sequelize';
import fs from 'fs'


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: "./datos/datos.db",
});

const Proyecto = sequelize.define('Proyecto',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    nom_pr:{
        type:DataTypes.STRING,
        allowNull:false
    },
    descr_pr:{
        type:DataTypes.STRING,
        allowNull:false
    },
    img:{
        type:DataTypes.STRING,
        allowNull:false
    
    },
    link:{
        type:DataTypes.STRING,
        allowNull:false
    },
},
{
    tableName: 'proyectos',
    timestamps: false
})

const inicializarDesdeJSON = async (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const proyectos = JSON.parse(data);

        if (!Array.isArray(proyectos) || proyectos.length === 0) {
            throw new Error('Archivo JSON vacío o no válido.');
        }

        await sequelize.sync({ force: true });
        await Proyecto.bulkCreate(proyectos);
    } catch (error) {
        console.error('Error cargando Proyectos:', error.message);
    } finally {
        await sequelize.close();
    }
};

export default {inicializarDesdeJSON}