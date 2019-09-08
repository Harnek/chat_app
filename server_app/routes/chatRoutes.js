const express = require('express');
const router = express.Router();

const controllers = require('../controllers')

module.exports.setRouter = (app) => {
    app.get('/', controllers.usersController.helloWorld)
}