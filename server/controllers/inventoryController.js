const InventoryItem = require("../models/InventoryItem");

// GET all inventory items
const getAllInventoryItems = async (req, res) => {
  try {
    const inventoryItems = await InventoryItem.find();
    res.json(inventoryItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET a single inventory item by ID
const getInventoryItemById = async (req, res) => {
  try {
    const inventoryItem = await InventoryItem.findById(req.params.id);
    if (inventoryItem == null) {
      return res.status(404).json({ message: "Inventory item not found" });
    }
    res.json(inventoryItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE a new inventory item
const createInventoryItem = async (req, res) => {
  const inventoryItem = new InventoryItem(req.body);
  try {
    const newInventoryItem = await inventoryItem.save();
    res.status(201).json(newInventoryItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE an existing inventory item
const updateInventoryItem = async (req, res) => {
  try {
    const updatedInventoryItem = await InventoryItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedInventoryItem == null) {
      return res.status(404).json({ message: "Inventory item not found" });
    }
    res.json(updatedInventoryItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE an inventory item
const deleteInventoryItem = async (req, res) => {
  try {
    const inventoryItem = await InventoryItem.findByIdAndDelete(req.params.id);
    if (inventoryItem == null) {
      return res.status(404).json({ message: "Inventory item not found" });
    }
    res.json({ message: "Inventory item deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllInventoryItems,
  getInventoryItemById,
  createInventoryItem,
  updateInventoryItem,
  deleteInventoryItem,
};
