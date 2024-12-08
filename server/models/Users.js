const mongoose = require('mongoose');

const UserSchema = new mongoose.Shema({
    name: String,
    email: String,
    phone: Number,
    address: String,
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;