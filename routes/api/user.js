const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
  .post(userController.register);

router.route("/:id")
    .get(userController.findById);

// Matches with "/api/users/:id"
// router
//   .route("/:email")
//   .post(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
