const Sequelize = require('sequelize')
const sequelize = new Sequelize('vzm7miunxhsuh5fa' , 'jqug845snc1roa7p' , 's4z0cqi2uybznrcx' , {
    host: 'nba02whlntki5w2p.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    port: 3306
} )

module.exports = sequelize
