const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      text: true,
    },
    description: {
      type: String,
      required: true,
      text: true,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
      maxlength: 32,
    },
    category: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
