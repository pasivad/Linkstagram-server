const Router = require('express');
const router = new Router();

const LoginSessionsController = require('../controllers/loginSessionsController.js');

router.get('/', LoginSessionsController.getAll);
router.get('/actionsTest', LoginSessionsController.actionsTest);

module.exports = router;
