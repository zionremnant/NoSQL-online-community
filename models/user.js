const mongoose = require("mongoose");
const { isEmail } = require("validator");
// Schema to create user model
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    thoughts: [{ type: mongoose.Schema.ObjectId, ref: "Thought" }],
    friends: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
    email: {
      type: Date,
      required: true,
      unique: true,
      validate: [isEmail, "invalid email"],
    },
  },
  { toJSON: { virtuals: true }, id: false }
);
userSchema.virtual("friendCount").get(function () {
  return `${this.friends.length}`;
});

const User = mongoose.model("User", userSchema);

module.exports = User;
