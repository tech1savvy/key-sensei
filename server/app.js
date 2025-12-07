const express = require("express");
const cookieParser = require("cookie-parser");
const { protect, optionalProtect } = require("./features/auth/auth.middleware");
const { authRoutes } = require("./features/auth/auth.routes");
const {
	typingTestRoutes,
} = require("./features/typingTest/typingTest.routes.js");

const app = express();

app.use(express.json());
app.use(cookieParser());

// TODO: Add CROS

app.get("/api", optionalProtect, (_, res) => {
	res.json("hello from key-sensie!");
});

// TODO: Create a seprate routes.js

app.use("/api/auth", authRoutes);
app.use("/api/typing-test", protect, typingTestRoutes);

module.exports = app;
