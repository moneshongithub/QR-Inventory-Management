const mongoose = require("mongoose");

const inventoryItemSchema = new mongoose.Schema({
  S_no: { type: Number, required: true },
  Name: { type: String, required: true },
  PartNumber: { type: String, required: true },
  DateReceived: { type: Date, required: true },
  DateDispatched: { type: Date },
  BalanceItems: { type: Number, required: true },
  QRIdentifier: { type: String, required: true, unique: true },
});

const InventoryItem = mongoose.model("InventoryItem", inventoryItemSchema);

module.exports = InventoryItem;
