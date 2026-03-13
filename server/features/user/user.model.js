const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
			select: false,
		},
	},
	{
		timestamps: true,
	},
);

// Hash password before saving
userSchema.pre("save", async function (next) {
	// Avoid rehashing same value
	if (!this.isModified("password")) return next();

	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

// Instance Method for comparing password
userSchema.methods.comparePassword = async function (candidatePassword) {
	return bcrypt.compare(candidatePassword, this.password);
};

const User = model("User", userSchema);

module.exports = {
	User,
};
