const router = require("express").Router();
const scheduleController = require("../../controllers/scheduleController");

// Matches with "/api/schedule"
router.route("/").post(scheduleController.create);

// Matches with "/api/schedule/:id"
router.route("/:id").put(scheduleController.update);

// Matches with "/api/schedule/userId/:date"
router.route("/:id/:date").get(scheduleController.retrieveAppt);

// Matches with "/api/schedule/All"
router.route("/All").post(scheduleController.retrieveAllAppt);

// Matches with "/api/schedule/delete"
router.route("/delete")
  .delete(scheduleController.removeAppt);


module.exports = router;
