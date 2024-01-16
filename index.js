const express = require("express");
require("dotenv").config();
const app = express();

const Review = require("./models/review");
const { connectToDB } = require("./db");

async function main() {
  await connectToDB();

  app.use(express.json());

  app.get("/api/review/get", async (req, res) => {
    try {
      const { productId } = req.query;

      const reviews = await Review.find({ productId });
      res.status(200).send(reviews);
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: "There was an error" });
    }
  });

  app.post("/api/review/save", async (req, res) => {
    try {
      const { productId, stars, comment } = req.body;

      const review = new Review({ productId, stars, comment });
      await review.save();

      res.status(200).send(review);
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: "There was an error" });
    }
  });

  const PORT = 8000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

main().catch((error) => {
  console.log(error);
});
