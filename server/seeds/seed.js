const { exit } = require("node:process");
const { connectdb } = require("../util/db/connect.js");
require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI;
connectdb(MONGODB_URI);

const { seedUser } = require("./user.seed.js");

// Async IIFE for calling seeders
(async () => {
	try {
		await seedUser();
	} catch (error) {
		console.log("Error:", error.message);
		exit(1);
	} finally {
		exit(0);
	}
})();
