const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  userId: { type: String, required: true , unique: true},
  date: { type: Date, default: Date.now },
  name: { type: String, required: true},
  approverList: [
    {
      type: Schema.Types.ObjectId,
      ref: "User" , 
      unique: false
    }
  ],
  appointmentBookingList: [
    {
      type: Schema.Types.ObjectId,
      ref: "Appointment",
      unique: false
    }
  ]
});

userSchema.plugin(uniqueValidator);

const User = mongoose.model("User", userSchema);

module.exports = User;
