const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");      // This will be used for future use with databases.

// Load input validation
const validateLoginInput = require("../validation/register");
// WIll most likely add validateRegisterInput here later.

// Here I will load database User Model later