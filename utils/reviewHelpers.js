const Review = require("../models/review");

async function createReview(productId, stars, comment, user) {
  try {
    const review = new Review({ productId, stars, comment, user });
    await review.save();

    return review;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function getReview(productId, user) {
  try {
    const review = await Review.findOne({ productId, user });

    return review;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function getAllReviews(productId) {
  try {
    const review = await Review.find({ productId });

    return review;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function updateReview(productId, stars, comment, user) {
  try {
    let review = await Review.findOneAndUpdate(
      { productId, user },
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
  getAllReviews,
};
