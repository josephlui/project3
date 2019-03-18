const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', unique: true },
  expiryDate: { type: Date, default: Date.now },
  tokenId: { type: String, required: true, unique: true},
  email: { type: String, required: true, unique: true},
});

sessionSchema.plugin(uniqueValidator);

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;
