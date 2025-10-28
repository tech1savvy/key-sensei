const { Router } = require("express");
const { handleLogin, handleSignup } = require("./user.controller");

const userRoutes = Router();

userRoutes.post("/login", handleLogin);

userRoutes.post("/signup", handleSignup);

module.exports = userRoutes;
