const router = require("express").Router();
const userController = require("../../controllers/userController");



// Matches with "/api/user"
router.route("/")
  .post(userController.register)
  .put(userController.updateApproverList)
  .get(userController.retrieveAll)

// Matches with "/api/user/:id"
router.route("/:id")
    .get(userController.findById);


router.route ("/tokensignin")
    .post(userController.validateOauthID)
module.exports = router;
