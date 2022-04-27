const Router = require('express')
const router = new Router()
const orderController = require('../controllers/orderController')

router.post('/', orderController.create)
router.get('/', orderController.getAll)
router.get('/oneIdorder', orderController.userOrder)
router.delete('/',  orderController.deleteOrder)

module.exports = router
