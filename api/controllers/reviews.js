const {
  getReview,
  updateReview,
  createReview,
  getAllReviews,
} = require("../../utils/reviewHelpers");

/**
 * POST API to create/update review for a product
 */
module.exports.create = async (req, res) => {
  try {
    const { productId, stars, comment, user } = req.body;

    let review = await getReview(productId, user);

    if (review) {
      review = await updateReview(productId, stars, comment, user);
    } else {
      review = await createReview(productId, stars, comment, user);
    }

    res.status(200).send(review);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "There was an error" });
  }
};

/**
 * GET API to fetch review for a product
 */
module.exports.get = async (req, res) => {
  try {
    const { productId, user } = req.query;

    if (!productId || !user) {
      return res.status(400).send({ error: "Missing required fields" });
    }

    const review = await getReview(productId, user);

    if (!review) {
      return res.status(404).send({ error: "No review found" });
    }

    res.status(200).send(review);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "There was an error" });
  }
};

/**
 * GET API to fetch all reviews for a product
 */
module.exports.getAll = async (req, res) => {
  try {
    const { productId } = req.query;

    if (!productId) {
      return res.status(400).send({ error: "Missing productId" });
    }

    const reviews = await getAllReviews(productId);

    if (!reviews) {
      return res.status(404).send({ error: "No reviews found" });
    }

    res.status(200).send(reviews);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "There was an error" });
  }
};
