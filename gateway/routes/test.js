let express = require('express');
let router = express.Router();

let test_controller =  require('../controller/testController')

router.get('/', test_controller.test)

module.exports = router;