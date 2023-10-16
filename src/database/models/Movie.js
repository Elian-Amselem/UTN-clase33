const { Sequelize, DataTypes } = require("sequelize");

//Para construir los modelos
//En la construcción de los modelos
//Se pasan 3 parametros
// alias / cols / config
module.exports = (Sequelize,DataTypes) => {
    let alias = "Movie";

    //Los tipos de datos, los obtenemos de la BD > movies_db > tabla > movies 
    let cols = 
    {
        id:{           //tipos de datos
            type: DataTypes.BIGINT(10).UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false 
        },

        title:{
            type: DataTypes.STRING(500),
            allowNull: false
        },

        rating:{
            type: DataTypes.DECIMAL(3,1),
            allowNull: false
        },

        awards:{
            type: DataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },

        release_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },

        length: {
            type: DataTypes.BIGINT(10),
        },

        genre_id: {
            type: DataTypes.BIGINT(10),
        }
    };

    //Se utiliza para "ignorar" ciertos datos
    //Como los datos DATE que vienen con valores null
    let config = {
        timestamps: true,
        createdAt: 'createdAt', // Valor null en Workbench
        updateAt: 'updateAt',   // Valor null en Workbench
        deleteAt: false
    }

    //Modelo definido
    const Movie = Sequelize.define(alias, cols, config);

    Movie.associate = function(models){
        Movie.belongsTo(models.Genre,{
            as: 'genre',
            foreignKey: 'genre_id'
        })
    }
    return Movie;
};