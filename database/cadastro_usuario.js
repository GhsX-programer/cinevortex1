/*const DataTypes = require('sequelize')
const sequelize = require('../database/conection')


const usuario = sequelize.define('Usuario', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email2: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha2: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});*/

const Sequelize = require('sequelize')
//const { Sequelize } = require('sequelize');
const sequelize = require('../database/conection')


const usuario = sequelize.define('Usuario', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email2: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    senha2: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});


/*const Usuario = sequelize.define('usuarios' , {
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email2:{
        type: Sequelize.STRING,
        allowNull: false
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false
    },
    senha2:{
        type: Sequelize.STRING,
        allowNull: false
    }
})*/

//usuario.sync({force: false}).then(()=>{});

usuario.sync({ force: false })
    .then(() => console.log('Modelo de usuarios sincronizado com sucesso.'))
    .catch(error => console.error('Erro ao sincronizar o modelo de usuarios:', error));

module.exports = usuario
