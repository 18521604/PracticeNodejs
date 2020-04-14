module.exports.postCreate = function (req, res, next) {
    var errors = [];

    if(!req.body.name) {
        errors.push('Name is required');
    }

    if(!req.body.phone) {
        errors.push('Phone is required');
    }

    if(errors.length) {
        res.render('users/create', {
            errors: errors,
            values: req.body
        });
        return;
    }
    
    
    //variable can use in the function (next) in below
    res.locals.sayBye = "Done";
    res.locals.sayHi = "Hello";

    next();
}