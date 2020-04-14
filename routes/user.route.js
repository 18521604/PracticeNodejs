var express = require('express');
var controller = require('../controller/user.controller');
var validate = require('../validate/user.validate');

var router = express.Router();  

router.get('/', controller.index);

//Search users
router.get('/search', controller.search);

//Create user
router.get('/create', controller.create);

router.post('/create', validate.postCreate, controller.postCreate);

//View info
router.get('/:id',controller.viewInfo);


module.exports = router;