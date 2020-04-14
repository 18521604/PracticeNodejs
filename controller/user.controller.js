//create automatic id
var shortid = require('shortid');
var db = require('../db');

module.exports.index = function (req, res) {
    res.render('users/index', {
        users: db.get('users').value()
    });
};

//Search user function
module.exports.search = function(req, res){
    var q = req.query.q;
    var matchedUsers = db.get('users').filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    }).value();

    res.render('users/index',{
        users: matchedUsers
    });
};

//Create user function
module.exports.create = function(req,res){
    res.render('users/create');
};

module.exports.postCreate = function(req, res){
    req.body.id = shortid.generate();

    //user the variable local
    console.log(res.locals.sayHi);
    console.log(res.locals.sayBye);

    db.get('users').push(req.body).write();
    res.redirect('/users');
};

//View info user function
module.exports.viewInfo = function (req, res) {
    var id = req.params.id;

    var user = db.get('users').find({ id: id}).value();

    res.render('users/view',{
        user: user
    })
}
