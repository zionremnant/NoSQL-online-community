const mongoose = require("mongoose");
const { shortDate } = require("../utils");
const Reaction = mongoose.model("Reaction", reactionSchema);
// Schema to create a reaction model
const reactionSchema = new mongoose.Schema(
  {
    reactionID: { type: mongoose.Schema.Types.ObjectId },
    reactionBody: { type: String, required: true, maxlength: 280 },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, get: shortDate },
  },
  { toJSON: { getters: true }, id: false }
);
module.exports = Reaction;
