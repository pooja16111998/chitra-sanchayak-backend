const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userId : {type : String, unique: true},
    userName : {type : String},
    password : {type : String},
    name : {type : String},
    token : {type : String},
    images : {type : Array, default: []}
});