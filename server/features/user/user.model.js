const { Schema, model } = require("mongoose");

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
      require: true,
    },
  },
  {
    virtuals: {
      fullname: {
        get() {
          return this.name.first + this.name.last;
        },
        set() {
          const split = value.split(" ");
          this.name.first = split[0];
          this.name.last = split[1];
        },
      },
    },
    timestamps: true,
  },
);
