const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  console.log("i am in register")
  //if error then return a bad request with error message
  // const errors = validationResult(req);

  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // }
  //1. check if user exist
  try {
    const founduser = await User.findOne({ username: req.body.username });
    if (founduser) {
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
    username:req.body.username.toLowerCase(),
      password: encryptedPassword,
    });

    // 4. Generate a JWT token and return it to the user

    const payload = { id: newUser._id, user: newUser.username };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '60h',
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//Route login the user

const login = async (req, res) => {
  //if error then return a bad request with error message
  // const errors = validationResult(req);

  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // }

  try {
    const founduser = await User.findOne({ username: req.body.username });
    console.log("founduser", founduser);
    if (!founduser) {
      return res.status(400).json({ error: "Invalid  user credentials" });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      founduser.password
    );
    console.log(req.body.password)
    console.log("foundpass", founduser.password);
    console.log('valid password',validPassword)
    if (!validPassword) {
      return res.status(400).json({ error: "Invalid  credentials" });
    }

    // 3. Generate a token and return it to the user

    const payload = { id: founduser._id, user: founduser.username };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '60h',
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports= {
  register,
  login,
};
