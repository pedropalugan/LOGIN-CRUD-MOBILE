const Sequelize = require("sequelize")
const database = require('../config/dbConnect')

const items = database.define('items',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    preco: Sequelize.DECIMAL
})

module.exports = items