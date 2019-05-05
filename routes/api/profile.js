const express = require("express");
const router = express.Router();

// @router  GET api/profile
// @desc    Test router
// @access  Public
router.get("/", function(req, res) {
  res.send("Profile route");
});

module.exports = router;
