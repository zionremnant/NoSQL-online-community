const Reaction = require("../models/reaction");

module.exports = {
  createReaction(req, res, next) {
    Reaction.create(req.body)
      .then((reaction) => {
        return thought.findOneAndUpdate(
          { _id: req.params.thoughtID },
          { $push: { reactions: reaction._id } },
          { new: true }
        );
      })
      .then((dbThoughtData) => {
        res.status(200).json(dbThoughtData);
      })
      .catch((err) => next(err));
  },
  deleteReaction(req, res, next) {
    Reaction.deleteOne({ _id: req.params.reactionID })
      .then((dbDeleteResponse) => {
        res.status(200).json(dbDeleteResponse);
      })
      .catch((err) => next(err));
  },
};
