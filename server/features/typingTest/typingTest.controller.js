const { TypingTest } = require("./typingTest.model.js");

const handleSetTypingTestResult = async (req, res) => {
	try {
		const { wpm, accuracy } = req.body;

		// TODO: Validate wpm and accuracy (required, number, range checks)
		const result = await TypingTest.create({
			wpm,
			accuracy,
			user: req.user.id,
		});
		res
			.status(201)
			.json({ message: "Result saved successfully", result: result });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to save typing test result" });
	}
};

// TODO: Implement pagination using limt and offset req.query
const handleGetTypingTestResult = async (req, res) => {
	try {
		const results = await TypingTest.find(
			{ user: req.user.id },
			"wpm accuracy createdAt",
		);
		res.status(200).json({ results: results });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to fetech typing test results" });
	}
};

module.exports = {
	handleSetTypingTestResult,
	handleGetTypingTestResult,
};
