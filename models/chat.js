const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    form: {  // Change "form" to "from"
        type: String,
        required: true
    },
    to: {
        type: String,
    },
    msg: {
        type: String,
        maxLength: 50
    },
    created_at: {
        type: Date,
    }
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
