const express = require("express");
const cookieParser = require("cookie-parser");
const { authRoutes } = require("./features/auth/auth.routes");
const { protect, optionalProtect } = require("./features/auth/auth.middleware");

const app = express();

app.use(express.json());
app.use(cookieParser());

// TODO: Add CROS

app.get("/api", optionalProtect, (_, res) => {
	res.json("hello from key-sensie!");
});

app.use("/api/auth", authRoutes);

module.exports = app;
