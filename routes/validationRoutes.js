const express = require('express')
const router = express.Router()
const {getJobID} = require('../controllers/validationController')

router.route('/').post(getJobID)

module.exports = router