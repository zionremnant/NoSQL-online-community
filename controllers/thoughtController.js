const Thought = require("../models/thought");

module.exports = {
  createThought(req, res, next) {
    Thought.create(req.body)
      .then((thought) => {
        return user.findOneAndUpdate(
          { _id: req.params.userID },
          { $push: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        res.status(200).json(dbUserData);
      })
      .catch((err) => next(err));
  },
  getThought(req, res, next) {
    Thought.find()
      .populate("reactions")
      .then((thoughts) => res.status(200).json(thoughts))
      .catch((err) => next(err));
  },
  getSingleThought(req, res, next) {
    Thought.findOne({ _id: req.params.thoughtID })
      .populate("reactions")
      .then((dbThoughtData) => res.status(200).json(dbThoughtData))
      .catch((err) => next(err));
  },
  editThought(req, res, next) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtID }, req.body, {
      returnDocument: "after",
    })
      .then((dbThoughtData) => res.status(200).json(dbThoughtData))
      .catch((err) => next(err));
  },

  deleteThought(req, res, next) {
    Thought.deleteOne({ _id: req.params.thoughtID })
      .then((dbDeleteThoughtResponse) => {
        res.status(200).json(dbDeleteThoughtResponse);
      })
      .catch((err) => next(err));
  },
};
