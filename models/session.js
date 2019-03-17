const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', unique: true },
  expiryDate: { type: Date, default: Date.now },
  tokenId: { type: String, required: true, unique: true},
});

sessionSchema.plugin(uniqueValidator);

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;
