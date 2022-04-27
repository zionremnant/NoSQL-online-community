const router = require("express").Router();
const {
  getUser,
  getSingleUser,
  createUser,
  editUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController.js");

// /api/user
router.route("/").get(getUser).post(createUser);

// /api/user/:userID
router.route("/:userID").get(getSingleUser).delete(deleteUser).put(editUser);

// /api/user/:userID/:friendID
router.route("/:userID/:friendID").put(addFriend).delete(deleteFriend);

module.exports = router;
