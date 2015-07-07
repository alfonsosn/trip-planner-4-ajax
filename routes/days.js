var mongoose = require('mongoose');
var models = require('../models/');
var dayRouter = require('express').Router();
var attractionRouter = require('express').Router();

// GET /days
dayRouter.get('/', function (req, res, next) {

});

// POST /days
dayRouter.post('/', function (req, res, next) {
    // creates a new day and serves it as json
});

// GET /days/:id
dayRouter.get('/:id', function (req, res, next) {
    // serves a particular day as json
});

// DELETE /days/:id
dayRouter.delete('/:id', function (req, res, next) {
    // deletes a particular day
});

// POST /days/:id/hotel

module.exports = dayRouter;