const express = require("express");
const router = express.Router();

// @router  GET api/posts
// @desc    Test router
// @access  Public
router.get("/", function(req, res) {
  res.send("Posts route");
});

module.exports = router;
