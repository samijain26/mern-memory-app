const Memory = require("../models/Memory.js");

// get all memory
const getmemory = async (req, res) => {
  try {
    console.log("1", req.user);
    const getmemory = await Memory.find({ user: req.user.toLowerCase() });
    console.log("2", getmemory);
    res.status(200).json(getmemory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// create a new memory
const creatememory = async (req, res) => {
  try {
    const postmemory = await Memory.create({
      ...req.body,
      user: req.user.toLowerCase(),
    });
    res.status(200).json(postmemory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//update user memory

const editmemory = async (req, res) => {
  try {
    let foundmemory = await Memory.findById(req.params.id);
    console.log('12',foundmemory)
    if (!foundmemory) {
      return res.status(404).send(" action not found");
    }
    if (foundmemory.user.toLowerCase() !== req.user.toLowerCase()) {
      console.log("23", foundmemory.user);
      console.log("23", req.user);
      return res.status(401).send("not allowed");
    }
    foundmemory = await Memory.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(foundmemory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a particular memory for a login user

const removememory = async (req, res) => {
  try {
    let foundmemory = await Memory.findById(req.params.id);
    if (!foundmemory) {
      return res.status(404).send(" memory not found");
    }
    if (foundmemory.user.toLowerCase() !== req.user.toLowerCase()) {
      return res.status(401).send(" Action not allowed");
    }
    foundmemory = await Memory.findByIdAndDelete(
      req.params.id,
      
    );
    res.status(200).json({ 'message': 'deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.meaaage });
  }
};

module.exports = {
  getmemory,
  creatememory,
  editmemory,
  removememory,
};
