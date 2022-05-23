const Sequelize = require("express")


const database = require('../config/dbConnect')
const items = require('../model/itens')


class itemsMercado{
    static async getData(req, res){
        await database.sync()
        let requisition = await items.findAll({raw:true})
        res.send(requisition)
    }
}

module.exports =  itemsMercado