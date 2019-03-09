const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;


const userSchema = new Schema({
  userId: { type: String, required: true , unique: true},
  date: { type: Date, default: Date.now },
  
  approvedUserList: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

userSchema.plugin(uniqueValidator);

const User = mongoose.model("User", userSchema);

module.exports = User;
