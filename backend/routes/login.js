const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// Load in the input validation
const validateLoginInput = require("../validation/login");

// Load in user model
const User = require("../models/User");

router.post("/", function(req, res) {
    //res.send("Login successful!");

    const { errors, isValid } = validateLoginInput(req.body);

    // Checking through validation
    if (!isValid) {
        return res.status(400).json(errors)
    }

    const username = req.body.username;
    const password = req.body.password;

    // Search for user by username
    User.findOne({ username }).then(user => {
        // We first check if the user exists
        if (!user) {
            return res.status(404).json({ usernamenotfound: "username not found"});
        }
        
        // Test password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    username: user.username
                };

                // Sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926 // 1 Year in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Passowrd incorrect" });
            }
        });

    });
});

module.exports = router;