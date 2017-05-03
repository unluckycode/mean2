var express = require('express');
var router = express.Router();

var Messages = require('../models/messages');

router.post('/', function (req, res, next) {
    var message = new Message({
        content: req.body.content
    });
    message.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Save message',
            obj: result
        });
    });
});

module.exports = router;
