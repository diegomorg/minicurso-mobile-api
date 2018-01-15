'use strict';
module.exports = function(app) {
    var cliforCtrl = require('../controllers/cliforController');

    app.route('/clifors')
        .get(cliforCtrl.list)
        .post(cliforCtrl.create);

    app.route('/clifors/:id')
        .get(cliforCtrl.get)
        .put(cliforCtrl.update)
        .delete(cliforCtrl.delete);
};