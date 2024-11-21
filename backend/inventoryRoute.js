// backend/routes/inventory.js
Const express = require(“express”);
Const { addInventory, getInventory } = require(“../controllers/inventoryController”);

Const router = express.Router();

Router.post(“/”, addInventory);
Router.get(“/”, getInventory);

Module.exports = router;

