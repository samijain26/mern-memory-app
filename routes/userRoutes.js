const express = require('express')
const router = express.Router()

userCtrl = require('../controllers/usercontroller')

router.get('/info', userCtrl.info)

module.exports = router