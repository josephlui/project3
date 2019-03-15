const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  calenderOwnerUserId: 
    {  
      required: true,
      type: Schema.Types.ObjectId,
      ref: "User"
    },
  // ownerName: { type: String, required: true},
  
  clientId: { 
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true 
  },
  // clientName: { type: String, required: true},
  status: { type: Boolean, required: false, default: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  description: { type: String, required: false},
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
