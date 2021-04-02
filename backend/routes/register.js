const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

// Load in the input validation
const validateRegisterInput = require("../validation/register");

// Load in user model
const User = require("../models/User")

router.post("/", function(req, res) {
    //res.send("Register successful!");

    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ username: req.body.username })
        .then(user => { if (user) {
                            return res.status(400).json({ username: "Username already exists" });
                        } else {
                            const newUser = new User ({
                                username: req.body.username,
                                password: req.body.password
                            });

                            // Hash password using bcrypt before adding to database
                            bcrypt.genSalt(10, (err, salt) => {
                                bcrypt.hash(newUser.password, salt, (err, hash) => {
                                    if (err) throw err;
                                    newUser.password = hash;
                                    newUser
                                        .save()
                                        .then(user => res.json(user))
                                        .catch(err => console.log(err));
                                });
                            });
                        }
            });
});

module.exports = router;