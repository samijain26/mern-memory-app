const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  //if error then return a bad request with error message
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
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
    username:req.body.username.toLowerCase(),
      password: encryptedPassword,
    });

    // 4. Generate a JWT token and return it to the user

    const payload = { id: newUser._id, user: newUser.username };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: 1000,
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//Route login the user

const login = async (req, res) => {
  //if error then return a bad request with error message
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).json({ error: "Invalid  credentials" });
    }

    // 3. Generate a token and return it to the user

    const payload = { id: user._id, user: user.username };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: 1000,
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
