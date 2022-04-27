const mongoose = require("mongoose");
const { longDate } = require("../utils");
// Schema to create a thought model
const thoughtSchema = new mongoose.Schema(
  {
    reactions: [{ type: mongoose.Schema.ObjectId, ref: "Reaction" }],
    thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, required: true, get: longDate },
  },
  { toJSON: { virtuals: true, getters: true }, id: false }
);
thoughtSchema.virtual("reactionCount").get(function () {
  return `${this.reactions.length}`;
});

const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;
