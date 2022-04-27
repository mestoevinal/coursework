const Router = require('express')
const router = new Router()
const exursionController = require('../controllers/exursionController')

router.post('/', exursionController.create)
router.get('/', exursionController.getAll)
router.delete('/', exursionController.deleteExur)

module.exports = router
