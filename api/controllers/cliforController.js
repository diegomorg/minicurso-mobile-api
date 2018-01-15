'use strict';

var mongoose = require('mongoose'),
    Clifor = mongoose.model('Clifor');

exports.list = function(req, res) {
    Clifor.find({}, function(err, clifors) {
        if (err) res.send(error);
        res.json(clifors);
    });
};

exports.create = function(req, res) {
    var clifor = new Clifor(req.body);
    clifor.save(function(err, task) {
        if (err) res.send(err);
        res.json(clifor);
    });
};

exports.update = function(req, res) {
    Clifor.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, clifor) {
        if (err) res.send(err);
        res.json(clifor);
    });
};

exports.get = function(req, res) {
    Clifor.findById(req.params.id, function(err, clifor) {
        if (err) res.send(err);
        res.json(clifor);
    });
};

exports.delete = function(req, res) {
    Clifor.remove({
        _id: req.params.id
    }, function(err, clifor) {
        if (err) res.send(err);
        res.json({ message: 'Clifor excluído com sucesso' });
    });
};

