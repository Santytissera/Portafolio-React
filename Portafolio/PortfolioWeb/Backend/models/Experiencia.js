import { Sequelize, DataTypes } from "sequelize";

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


export default Experiencia