// backend/models/User.js
Const mongoose = require(“mongoose”);

Const UserSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true, unique: true },
  Password: { type: String, required: true },
  Role: { type: String, enum: [“farmer”, “buyer”, “logistics”], required: true }
});

Module.exports = mongoose.model(“User”, UserSchema);
