const express = require('express')
const router = express.Router()

userCtrl = require('../controllers/usercontroller')

router.get('/info', userCtrl.info)

//update the user
router.put('/update/:id', userCtrl.updateuser)

//delete the user
router.delete('/delete/:id',userCtrl.deleteuser,)

module.exports = router