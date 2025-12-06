const { getUser } = require("./auth.service");

async function protect(req, res, next) {
	// Check jwt cookie
	const token = req.cookies?.jwt;
	if (!token) return res.status(401).json({ error: "Authentication required" });
	const user = getUser(token);
	if (!user) return res.status.json({ error: "Invalid token" });
	req.user = user;
	next();
}

async function optionalProtect(req, _, next) {
	const token = req.cookies?.jwt;

	if (!token) next();
	const user = getUser(token);
	if (!user) next();

	req.user = user;
	next();
}

module.exports = {
	protect,
	optionalProtect,
};
