const express = require("express");
const Activity = require("../models/activity");
const security = require("../middleware/security");
const router = express.Router();

router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { user } = res.locals;
    const activities = await Activity.listAvgExercises({ user });
    return res.status(200).json({ activities });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
