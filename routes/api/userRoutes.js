const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  editUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController.js");

// /api/user
router.route("/").post(createUser).get(getUsers);

// /api/user/:userID
router.route("/:userID").get(getSingleUser).delete(deleteUser).put(editUser);

// /api/user/:userID/:friendID
router.route("/:userID/:friendID").put(addFriend).delete(deleteFriend);

module.exports = router;
