const User = require('../models/User')

const Memory = require('../models/Memory')
const info = async (req, res) => {


    try {
        const foundUser = await User.findById(req.userid)
         res
           .status(200)
             .json({
                 username: foundUser.username,
                 email: foundUser.email
                
             });
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
}
//update the user

// const updateuser = async (req, res) => {
//   try {
//     const foundUser = await User.findById(req.userid);
//     res.status(200).json({
//       username: foundUser.username,
//       email: foundUser.email,
//     });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

const updateuser = async (req, res) => {
  try {
    let founduser = await User.findById(req.params.id);
    console.log("12", founduser);
    if (!founduser) {
      return res.status(404).send(" user not found");
    }
    
    founduser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(founduser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


//delete user

const deleteuser = async (req, res) => {
    try {
    
    let founduser = await User.findById(req.params.id);
    console.log("12", founduser);
    if (!founduser) {
      return res.status(404).send(" user not found");
    }
      //    const getmemory = await Memory.find({ user: req.user.toLowerCase() });
      // let memoryfound = await Memory.deleteMany({});
    founduser = await User.findByIdAndDelete(
      req.params.id,
    
    );
      res.status(200).json({ 'message': "user unsubscribed" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
    info,
    updateuser,
    deleteuser,
}