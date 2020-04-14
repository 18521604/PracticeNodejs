var express = require('express');
var controller = require('../controller/user.controller');
var validate = require('../validate/user.validate');
var authMiddleWare = require('../middleware/auth.middleware');

var router = express.Router();  

router.get('/', authMiddleWare.requireAuth, controller.index);

//Search users
router.get('/search', controller.search);

//Create user
router.get('/create', controller.create);

router.post('/create', validate.postCreate, controller.postCreate);

//View info
router.get('/:id',controller.viewInfo);


module.exports = router;