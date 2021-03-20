const express = require("express");
const router = express.Router();

router.post("/newForm", function(req, res) {
    res.send("Quote Form Received");
});

module.exports = router;