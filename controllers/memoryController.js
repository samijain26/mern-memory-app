const Memory = require("../models/Memory.js");

// get all memory
const getmemory = async (req, res) => {
  try {
    console.log("1", req.user);
    const getmemory = await Memory.find({ user: req.user.toLowerCase() });
    console.log("2", getmemory);
    res.status(200).json({ newmemory:getmemory });
  } catch (error) {
    res.status(400).json({ error:error.message });
  }
};

// create a new memory
const creatememory = async (req, res) => {
  try {
    console.log(" hello i am in craete memory");
    console.log(req.body)
    const postmemory = await Memory.create(req.body);
    console.log("i am in craete memory")
    res.status(200).json({ newmemory:postmemory });
  } catch (error) {
    res.status(400).json({ error:error.message });
  }
};

//update user memory

const editmemory = async (req, res) => {
  try {
    let foundmemory = await Memory.findById(req.params.id);
    console.log('12I am in',foundmemory)
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
    res.status(200).json({ newmemory: foundmemory });
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
const removeAllMemory = async (req, res) => {
  try {
    let foundmemory = await Memory.find({ user: req.user });
    console.log("i am in")
    if (!foundmemory) {
      return res.status(404).send(" memory not found");
    }
    // if (foundmemory.user.toLowerCase() !== req.user.toLowerCase()) {
    //   return res.status(401).send(" Action not allowed");
    // }
    foundmemory = await Memory.deleteMany({ user: req.user });
    res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.meaaage });
  }
};



module.exports = {
  getmemory,
  creatememory,
  editmemory,
  removememory,
  removeAllMemory,
};
