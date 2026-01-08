const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: String,
	country: String,
	gender: String,
	address: String,
	password: Number,
});

module.exports = mongoose.model("User", userSchema);
