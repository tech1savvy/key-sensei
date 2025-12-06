const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

// JWT Signing
function setUser(user) {
	const payload = {
		_id: user._id,
		email: user.email,
	};
	return jwt.sign(payload, secret, { expiresIn: "1w" });
}

// JWT Verification
function getUser(token) {
	if (!token) return null;
	try {
		return jwt.verify(token, secret);
	} catch (error) {
		console.log(error);
		return null;
	}
}

module.exports = {
	setUser,
	getUser,
};
