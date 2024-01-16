const express = require("express");

const reviewAPIs = require("../api/routers/reviews");

const router = new express.Router();

router.use("/review", reviewAPIs);

module.exports = router;
