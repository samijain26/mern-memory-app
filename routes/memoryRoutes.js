const express = require('express')
const router = express.Router()

memCtrl = require('../controllers/memoryController.js')

//get memory post
router.get('/fetchmemory', memCtrl.getmemory)


//create memory post
router.post('/postmemory', memCtrl.creatememory)

//update existing memory

router.put('/updatememory/:id', memCtrl.editmemory)

//delete memory

router.delete('/deletememory/:id',memCtrl.removememory)


module.exports = router