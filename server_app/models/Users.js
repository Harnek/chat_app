const mongoose = require('mongoose');

let Users = new mongoose.Schema({
    firstName : {type: String, required: true},
    lastName : {type: String, required: true},
    email : {type: String, required: true},
    password : {type: String, required: true},
    phoneNo :[{
        countryCode: {type: String},
        phone: {type: Number}
    }] 
})

module.exports = mongoose.model('Users', Users)