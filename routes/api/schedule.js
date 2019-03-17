const router = require("express").Router();
const scheduleController = require("../../controllers/scheduleController");

// Matches with "/api/schedule"
router.route("/")
  .post(scheduleController.create)

// Matches with "/api/schedule/:id"
router.route("/:id")
  .put (scheduleController.update)

// Matches with "/api/schedule/:date"
router.route("/:date")
    .get(scheduleController.retrieveAppt);

module.exports = router;
