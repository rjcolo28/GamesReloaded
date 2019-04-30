const router = require("express").Router();
const gamesRoutes = require("./games");
const signinRoutes = require("./signin");
const reviewsRoutes = require("./reviews");


router.use("/games", gamesRoutes);
router.use("/users", signinRoutes);
router.use("/reviews", reviewsRoutes);

module.exports = router;