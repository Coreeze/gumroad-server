const Review = require("../models/review");

async function createReview(productId, stars, comment) {
  try {
    const review = new Review({ productId, stars, comment });
    await review.save();

    return review;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function getReview(productId) {
  try {
    const review = await Review.findOne({ productId });

    return review;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function updateReview(productId, stars, comment) {
  try {
    let review = await Review.findOneAndUpdate(
      { productId },
      { stars, comment },
      { new: true }
    );

    return review;
  } catch (error) {
    console.log(error);
    return null;
  }
}

module.exports = {
  getReview,
  updateReview,
  createReview,
};
