const Memory = require('../models/Memory.js')


const getmemory = async (req, res) => {
    
    try {
      const getmemory = await Memory.find()
    res.status(200).json(getmemory);
    } catch {
        res.status(400).json({ msg: error.message }) 
  }
};

const creatememory = async (req, res) => {
    try {
        const postmemory = await Memory.create(req.body)
        res.status(200).json(postmemory)
    } catch {
        res.status(400).json({msg:error.message})
        
    }

}

module.exports = {
  getmemory,
  creatememory,
};