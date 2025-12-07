const { Router } = require("express");
const {
	handleSetTypingTestResult,
	handleGetTypingTestResult,
} = require("./typingTest.controller.js");

const typingTestRoutes = Router();

typingTestRoutes.get("/results", handleGetTypingTestResult);
typingTestRoutes.post("/results", handleSetTypingTestResult);

module.exports = {
	typingTestRoutes,
};
