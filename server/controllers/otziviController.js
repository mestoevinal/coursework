const {Otzivi, Exursion} = require('../models/models')
const ApiError = require("../error/ApiError");

class CommController {
    async create(req, res, next) {
        const {title, description, exursionId} = req.body
        if (title && description && exursionId) {
            const comm = await Otzivi.create({title, description, exursionId})
            return res.json(comm)
        }
        return next(ApiError.internal('Заполните обязательные поля'))


    }

    async getAll(req, res) {
        let {exursionId} = req.query
        const comm = await Otzivi.findAll({where: {exursionId}})
        return res.json(comm)
    }

    async deleteOtziv(req, res) {
        let {id} = req.query
        await Otzivi.destroy({
            where: {id}
        })
    }
}

module.exports = new CommController()
