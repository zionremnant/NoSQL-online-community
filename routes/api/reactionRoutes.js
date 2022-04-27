const router = require("express").Router();
const {
  createReaction,
  deleteReaction,
} = require("../../controllers/reactionController.js");

// /api/thought/:thoughtID & reactionID
router.route("/:thoughtID").post(createReaction);
router.route("/:reactionId").delete(deleteReaction);

module.exports = router;
