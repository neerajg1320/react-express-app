const express = require("express");
const router = express.Router();

// @router  GET api/auth
// @desc    Test router
// @access  Public
router.get("/", function(req, res) {
  res.send("Auth route");
});
module.exports = router;
