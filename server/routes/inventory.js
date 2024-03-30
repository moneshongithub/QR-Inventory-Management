const express = require("express");
const router = express.Router();
const {
  getAllInventoryItems,
  getInventoryItemById,
  createInventoryItem,
  updateInventoryItem,
  deleteInventoryItem,
} = require("../controllers/inventoryController");

// Middleware to get inventory item by ID
async function getInventoryItem(req, res, next) {
  let inventoryItem;
  try {
    inventoryItem = await InventoryItem.findById(req.params.id);
    if (inventoryItem == null) {
      return res.status(404).json({ message: "Inventory item not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.inventoryItem = inventoryItem;
  next();
}

// Routes
router.get("/getAll", getAllInventoryItems);
router.get("findOne/:id", getInventoryItemById);
router.post("/createInvetory", createInventoryItem);
router.patch("updateInventory/:id", updateInventoryItem);
router.delete("delete/:id", deleteInventoryItem);

module.exports = router;
