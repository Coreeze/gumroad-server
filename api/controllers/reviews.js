const {
  getReview,
  updateReview,
  createReview,
} = require("../../utils/reviewHelpers");

/**
 * POST API to create/update review for a product
 */
module.exports.create = async (req, res) => {
  try {
    const { productId, stars, comment } = req.body;

    let review = await getReview(productId);

    if (review) {
      review = await updateReview(productId, stars, comment);
    } else {
      review = await createReview(productId, stars, comment);
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
    const { productId } = req.query;

    const review = await getReview(productId);

    res.status(200).send(review);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "There was an error" });
  }
};
