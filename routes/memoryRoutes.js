const express = require('express')
const router = express.Router()

memCtrl = require('../controllers/memoryController.js')

//get memory post
router.get('/display', memCtrl.getmemory)


//create memory post
router.post('/add',memCtrl.creatememory)


module.exports = router