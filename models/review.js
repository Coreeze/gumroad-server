const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
    stars: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
    },
  },
  { timestamps: true },
  { collection: "reviews" }
);

const RegisterCodes = mongoose.model("reviews", reviewSchema);

module.exports = RegisterCodes;
