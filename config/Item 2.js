const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  details: { type: String, required: true },
  type: { type: String, required: true },
  duree: { type: Number, required: true },
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
