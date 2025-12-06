const { User } = require("../user/user.model");
const { setUser } = require("./auth.service");

// TODO: Add error handling & validation
const handleRegister = async (req, res) => {
	// Create user
	const { name, email, password } = req.body;
	const newUser = await User.create({
		fullname: name,
		email: email,
		password: password,
	});

	res.status(201).json({
		message: "User created successfully",
		user: { id: newUser._id, name: newUser.fullname, email: newUser.email },
	});
};

// TODO: Add error handling & validation
const handleLogin = async (req, res) => {
	const { email, password } = req.body;
	// Find User by mail
	const user = await User.findOne({ email }).select("+password");
	if (!user)
		return res.status(401).json({ error: "Invalid email or password" });

	// Match Password: using instance method defined on the model
	const isMatch = await user.comparePassword(password);
	if (!isMatch)
		return res.status(401).json({ error: "Invalid email or password" });

	// Set jwt cookie
	const token = setUser(user);
	res.cookie("jwt", token);
	return res.status(200).json({ message: "User logged-in successfully" });
};

// TODO: Add error handling & validation
const handleLogout = (req, res) => {
	// Clear jwt cookie
	if (!req.cookies?.jwt)
		return res.status(400).json({ message: "User not logged-in" });

	res.clearCookie("jwt");
	return res.status(200).json({ message: "User logged-out successfully" });
};

module.exports = {
	handleLogin,
	handleRegister,
	handleLogout,
};
