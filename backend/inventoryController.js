// backend/controllers/inventoryController.js
Const Inventory = require(“../models/Inventory”);

Exports.addInventory = async (req, res) => {
  Const { productName, quantity } = req.body;
  Try {
    Const inventory = new Inventory({ productName, quantity, user: req.user.userId });
    Await inventory.save();
    Res.status(201).json(inventory);
  } catch (err) {
    Res.status(500).json({ error: err.message });
  }
};

Exports.getInventory = async (req, res) => {
  Try {
    Const inventory = await Inventory.find({ user: req.user.userId });
    Res.json(inventory);
  } catch (err) {
    Res.status(500).json({ error: err.message });
  }
};
