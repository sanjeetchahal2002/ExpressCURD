const dbConfig = require('../config/dbConfig.js')
const {Sequelize,DataTypes} = require('sequelize')

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorsAliases:false,
    }
)
sequelize.authenticate()
.then(()=>{
    console.log('Connected')
})
.catch((error)=>{
    console.log(error)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.todos = require('./todoModel.js')(sequelize,DataTypes)

db.sequelize.sync({ alter: true })
.then(()=>{
    console.log('yes re-sync done!')
})

module.exports = db