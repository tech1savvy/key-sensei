const { Schema, model } = require("mongoose");

const typingTestSchema = new Schema(
  {
    wpm: {
      type: Number,
    },
    accuracy: {
      type: Number,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

const TypingTest = model("TypingTest", typingTestSchema);

module.exports = {
  TypingTest,
};
