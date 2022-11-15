const express = require('express')
const router = express.Router()

memCtrl = require('../controllers/memoryController.js')

//get memory post
router.get('/fetchmemory', memCtrl.getmemory)

//get specific memory based on tag search 
//router.get('/search', memCtrl.searchmemory)

//create memory post
router.post('/add', memCtrl.creatememory)

//update existing memory

router.put('/updatememory/:id', memCtrl.editmemory)

//delete  one memory for user

router.delete('/deletememory/:id',memCtrl.removememory)

//delete all memory fot the user
router.delete('/deleteAll',memCtrl.removeAllMemory)

module.exports = router