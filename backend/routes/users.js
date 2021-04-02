const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");      // This will be used for future use with databases.

// Load input validation
const validateLoginInput = require("../validation/login");
const validateRegisterInput = require("../validation/register");
// Will most likely add validateRegisterInput here later.

// Here I will load database User Model later
// It is now later
const User = require("../../models/User");