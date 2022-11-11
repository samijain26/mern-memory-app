const express = require('express')
const router = express.Router()

userCtrl = require('../controllers/usercontroller')

router.get('/info', userCtrl.info)

//update the user
router.put('/update', userCtrl.updateuser)

//delete the user
router.delete('/delete',userCtrl.deleteuser)

module.exports = router