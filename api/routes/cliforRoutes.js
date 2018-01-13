'use strict';
module.exports = function(app) {
    var clifor = require('../controllers/cliforController');

    app.route('/clifors')
        .get(clifor.list)
        .post(clifor.create);

    app.rout('/clifors/:id')
        .get(clifor.get)
        .put(clifor.update)
        .delete(clifor.delete);
};