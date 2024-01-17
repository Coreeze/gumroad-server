const express = require("express");
const router = new express.Router();

const controller = require("../controllers/reviews");

/**
 * POST API to create/update review for a product
 */
router.post("/create", controller.create);

/**
 * GET API to fetch review for a product
 */
router.get("/get", controller.get);

/**
 * GET API to fetch all reviews for a product
 */
router.get("/get_all", controller.getAll);

module.exports = router;
