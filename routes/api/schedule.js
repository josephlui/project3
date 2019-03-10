const router = require("express").Router();
const scheduleController = require("../../controllers/scheduleController");

// Matches with "/api/schedule"
router.route("/add")
  .post(scheduleController.create);

// Matches with "/api/schedule/:id"
router.route("/:id")
    .get(scheduleController.findById);
module.exports = router;
