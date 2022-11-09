const User = require('../models/User')


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

module.exports = { info,}