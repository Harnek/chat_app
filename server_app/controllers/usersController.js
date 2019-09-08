const service = require('../services/queries');
const Users = require('../models/Users');
const messages = require('../config/appConstants');
const universalFuntions = require('../utils/universalFunctions');

async function getUsers() {
    service.getDataPromise(Users);
}

async function userSignUp(req, res) {
    const userData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: universalFuntions.CryptData(req.body.password),
        phoneNo: [
            {
                countryCode: req.body.countryCode,
                phone: req.body.phone
            }
        ],
    }
    const user = await service.saveDataPromise(Users, userData);
    if (user) {
        res.send(messages.STATUS_MSG.SUCCESS.CREATED);
    } else {
        res.send(messages.STATUS_MSG.ERROR.APP_ERROR);
    }
}

module.exports = {
    getUsers,
    userSignUp
}