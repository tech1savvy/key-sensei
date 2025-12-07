const { User } = require("../features/user/user.model.js");

async function seedUser() {
	try {
		const dummyUser = new User({
			fullname: "Example User",
			email: "example@mail.com",
			password: "asdf;lkj",
		});

		await dummyUser.save();
		console.log("User seeded Successfully");
	} catch (error) {
		console.log("Seed Failed", error.message);
	}
}

module.exports = {
	seedUser,
};
