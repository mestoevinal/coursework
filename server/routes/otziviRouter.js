const Router = require('express')
const router = new Router()
const otziviController = require('../controllers/otziviController')

router.post('/', otziviController.create)
router.get('/', otziviController.getAll)
router.delete('/', otziviController.deleteOtziv)

module.exports = router
