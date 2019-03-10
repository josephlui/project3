const router = require("express").Router();
const userRoutes = require("./user");
const scheduleRoutes = require("./schedule");

// Schdules routes
router.use("/schedule", scheduleRoutes);

// user routes
router.use("/user", userRoutes);

module.exports = router;
