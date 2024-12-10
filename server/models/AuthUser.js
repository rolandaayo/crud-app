const mongoose = require("mongoose")

const AuthUserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const AuthUserModel = mongoose.model("authuser", AuthUserSchema)
module.exports = AuthUserModel;