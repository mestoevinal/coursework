const {Exursion, User} = require('../models/models')
const Sequelize = require('sequelize');
const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const Op = Sequelize.Op;

class ExursionController {
    async create(req, res, next) {
        const {name, cost, date, cityId, fio, description, address} = req.body
        if (name && cost && date && cityId && fio && description && address) {
            const newExur = await Exursion.create({name, cost, date, cityId, fio, description, address})
            return res.json(newExur)
        }
        return next(ApiError.internal('Заполните обязательные поля'))

    }

    async getAll(req, res) {
        let {cityId} = req.query
        if (cityId) {
            const startDate = new Date();
            const year = startDate.getFullYear();
            const month = startDate.getMonth();
            const day = startDate.getDate();
            const endDate = new Date(year + 1, month, day);
            const exur = await Exursion.findAll({
                where: {
                    cityId,
                    date: {
                        [Op.between]: [startDate, endDate]
                    }
                }
            })
            return res.json(exur)
        }
        let {id} = req.query
        if (id) {
            const exur = await Exursion.findOne({where: {id}})
            return res.json(exur)
        }
    }

    async deleteExur(req, res) {
        let {id} = req.query
        await Exursion.destroy({
            where: {id}
        })
    }


}

module.exports = new ExursionController()
