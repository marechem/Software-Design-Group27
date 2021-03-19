const express = require("express");
const router = express.Router();

router.post("/", function(req, res) {
    res.send("Register successful!");
});

module.exports = router;