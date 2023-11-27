const mongoose = require("mongoose");

const userAuthSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
});

module.exports = mongoose.model('UserAuth', userAuthSchema);

