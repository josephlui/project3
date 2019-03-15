const router = require("express").Router();
const scheduleController = require("../../controllers/scheduleController");

// Matches with "/api/schedule"
router.route("/add")
  .post(scheduleController.create);

// Matches with "/api/schedule/:userid/:date"
router.route("/:id/:date")
    .get(scheduleController.retrieveAppt);
module.exports = router;
