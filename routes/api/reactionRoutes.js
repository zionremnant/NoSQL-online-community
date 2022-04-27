const router = require("express").Router();
const {
  createReaction,
  deleteReaction,
} = require("../../controllers/reactionController.js");

// /api/thought/:thoughtID & reactionID
router.route("/:thoughtID").post(createReaction);
router.route("/:reactionID").delete(deleteReaction);

module.exports = router;
