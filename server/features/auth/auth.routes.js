const { Router } = require("express");

const {
	handleLogin,
	handleRegister,
	handleLogout,
} = require("./auth.controller");

const authRoutes = Router();

authRoutes.post("/login", handleLogin);

authRoutes.post("/register", handleRegister);

authRoutes.post("/logout", handleLogout);

module.exports = {
	authRoutes,
};
