const {City, Exursion} = require('../models/models')
const uuid = require('uuid')
const path = require("path");
const ApiError = require("../error/ApiError");

class CityController {
    async create(req, res,next) {
        const {name} = req.body
        if(!req.files){
            return next(ApiError.internal('Загрузите изображение'))
        }
        if (name) {
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const newCity = await City.create({name, img: fileName})
            return res.json(newCity)
        }
        return next(ApiError.internal('Заполните обязательные поля'))
    }



    async getAll(req, res) {
        const AllCity = await City.findAll()
        return res.json(AllCity)
    }

    async deleteCity(req, res) {
        let {id} = req.query
        City.destroy({
            where: {id}
        })
    }
}

module.exports = new CityController()
