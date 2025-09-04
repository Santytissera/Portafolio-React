import { Sequelize, DataTypes } from "sequelize";

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
    },
    portada:{
        type:DataTypes.STRING,
        allowNull:false
    },
    perfil:{
        type:DataTypes.STRING,
        allowNull:true
    }
 },
{
    tableName: 'personas',
    timestamps: false
});


export default Persona