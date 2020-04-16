var db = require('../db');

module.exports.index = function(req, res) {
    var page = parseInt(req.query.page) || 1;//if don't have a page in URL default page=1
    var proPerPage = 8; //8 products per Page

    var start = (page - 1) * proPerPage;
    var end = proPerPage * page;

    res.render('products/index', {
        products: db.get('products').value().slice(start,end)
    });
}