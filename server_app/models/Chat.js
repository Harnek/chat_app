const mongoose = require('mongoose');

let Chat = new Schema({
    chatId : {type: Number, require: true },
    senderId : {type: ObjectId() },
   // senderName : {type: String},
    receiverId : {type: Number},
    //receiverName : {type: String},
    message : {type: String},
    //chatName : {type: String}
})

module.exports = mongoose.model('Chat', Chat)