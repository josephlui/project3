const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router
  .route("/")
  .post(userController.register)
  .put(userController.updateUser)
  .get(userController.retrieveAll);

// Matches with "/api/user/:id"
router.route("/:id").get(userController.findByTokenId);

// Matches with "/api/user/tokensignin"
router.route("/tokensignin").post(userController.validateOauthID);

// Matches with "/api/user/logout"
router.route("/logout").post(userController.logout);

module.exports = router;
