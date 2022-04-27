const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Order = sequelize.define('order',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING},
    fio:{type: DataTypes.STRING, allowNull: false}
})

const Otzivi = sequelize.define('otzivi',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type:DataTypes.STRING, allowNull: false},
    description: {type:DataTypes.STRING(1234) , allowNull: false},
})

const Exursion = sequelize.define('exursion',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    cost: {type: DataTypes.INTEGER, allowNull: false},
    date: {type: DataTypes.DATE, allowNull: false},
    fio: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING(2000), allowNull: false},
    address: {type: DataTypes.STRING, allowNull: false},
})

const City = sequelize.define('city',{
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING(300), allowNull: true},
})

User.hasOne(Order)
Order.belongsTo(User)

Exursion.hasMany(Order)
Order.belongsTo(Exursion)


City.hasMany(Exursion)
Exursion.belongsTo(City)

Exursion.hasMany(Otzivi)
Otzivi.belongsTo(Exursion)



module.exports = {
    User,
    Exursion,
    Otzivi,
    City,
    Order
}
