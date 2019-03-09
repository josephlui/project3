const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: { type: String, required: true },
  date: { type: Date, default: Date.now },
  approvedUserList: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
