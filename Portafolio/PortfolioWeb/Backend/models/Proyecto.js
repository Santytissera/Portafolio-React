import { Sequelize, DataTypes } from 'sequelize';


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

export default Proyecto