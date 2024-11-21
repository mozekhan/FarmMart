// backend/models/Inventory.js
Const mongoose = require(“mongoose”);

Const InventorySchema = new mongoose.Schema({
  productName: { type: String, required: true },
  quantity: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: “User” }
});

Module.exports = mongoose.model(“Inventory”, InventorySchema);
