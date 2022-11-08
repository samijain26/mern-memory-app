const express = require('express')
const router= express.Router()
const authCtrl = require('../controllers/authController.js')
const User = require("../models/User");
const { body, validationResult } = require('express-validator')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// router.post('/login', authCtrl.login)
// router.post('/register', authCtrl.register)

router.post('/register', [
    //user initial validation
    body('email','Enter a valid Email').isEmail(),
    body('username','Enter a valid Name atleast 3 character').isLength({ min: 3 }),
    body('password','enter a valid password minimum length 5').isLength({min: 5})
], async (req, res) => {
    
    const errors = validationResult(req)
    
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
     //1. check if user exist
    try {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ msg: "user with this email already exist" });
      }

      // 2. If they don't exist, encrypt their password

      const salt = await bcrypt.genSalt(10);
      const encryptedPassword = await bcrypt.hash(req.body.password, salt);
      
      // 3. Add the new user to the database with their encrypted password

      const newUser = await User.create({
        ...req.body,
        password: encryptedPassword,
      });

      // 4. Generate a JWT token and return it to the user

      const payload = { id: newUser._id, user: newUser.username };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: 1000,
      });

      res.status(200).json({ token });
    } catch(error) {
        res.status(400).json({msg:error.message})
    }
    })
    



module.exports = router