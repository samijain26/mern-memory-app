const express = require('express')
const router= express.Router()
const authCtrl = require('../controllers/authController.js')
const User = require("../models/User");
const { body, validationResult } = require('express-validator')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// router.post('/login', authCtrl.login)
// router.post('/register', authCtrl.register)

router.get('/test',authCtrl.testroute)

router.post(
  "/register",
  
    //user initial validation
    body("email", "Enter a valid Email").isEmail(),
    body("username", "Enter a valid Name atleast 3 character").isLength({
      min: 3,
    }),
    body("password", "enter a valid password minimum length 5").isLength({
      min: 5,
    }),
  
  authCtrl.register
);
//Authanticate user for valid email and password

router.post(
  "/login",
  
    body("email", "Enter valid email").isEmail(),
    body("password", "Enter your password").exists(),
  
  authCtrl.login
);

module.exports = router