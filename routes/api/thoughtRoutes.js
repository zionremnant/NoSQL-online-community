const router = require("express").Router();
const {
  createThought,
  getThought,
  getSingleThought,
  editThought,
  deleteThought,
} = require("../../controllers/thoughtController.js");

// /api/thought
router.route("/").get(getThought);

// /api/thought/:thoughtId
router
  .route("/:thoughtID")
  .get(getSingleThought)
  .put(editThought)
  .delete(deleteThought);

router.route("/:userID").post(createThought);

module.exports = router;
