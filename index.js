const express = require("express");
require("dotenv").config();

const cors = require("cors");
const app = express();

const reviewMiddleware = require("./middleware/reviews");
const { connectToDB } = require("./db");

const PORT = 8000;

async function main() {
  await connectToDB();

  app.use(express.json());
  app.use(cors({ origin: true, credentials: true }));

  app.use("/api", reviewMiddleware);

  app.listen(PORT, () => {
    console.log("Server is up on port " + PORT);
  });

  /**
   * If endpont doens't exist
   */
  app.use(async (req, res) => {
    res.status(404).send({ error: "Endpoint not found" });
  });
}

main().catch(console.error);
