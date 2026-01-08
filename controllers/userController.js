const User = require("../models/UserSchema");

// Get all users
exports.getUsers = async (req, res) => {
	const users = await User.find();
	res.json(users);
};

// Create a new user
exports.createUser = async (req, res) => {
	const newUser = new User(req.body);
	await newUser.save();
	res.json(newUser);
};

// Update user
exports.updateUser = async (req, res) => {
	const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
	res.json(updatedUser);
};

// Delete user
exports.deleteUser = async (req, res) => {
	await User.findByIdAndDelete(req.params.id);
	res.json({ message: "User deleted" });
};
