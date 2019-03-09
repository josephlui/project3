const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  calenderOwnerUserId: { type: String, required: true },
  clientId: { type: String, required: true },
  status: { type: Boolean, required: false, default: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
