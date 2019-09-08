const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')

module.exports.setRoutes = (app) => {
    app.post('/users/signup', usersController.userSignUp)
    // app.post('/', usersController.userLogin)
    // app.get('/', usersController.getUsers)
    // app.post('/', usersController.Logout)
}
