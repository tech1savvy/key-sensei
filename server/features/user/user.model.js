const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
	{
		name: {
			firstname: {
				type: String,
				required: true,
			},
			lastname: String,
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
		virtuals: {
			fullname: {
				get() {
					if (!this.name.lastname)
						return `${this.name.firstname} ${this.name.lastname}`;
					return this.name.firstname;
				},
				set(fullname) {
					const [firstname, ...lastname] = fullname.split(" ");
					this.name.firstname = firstname;
					this.name.lastname = lastname.join(" ");
				},
			},
		},
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
