const express = require('express')
const router = express.Router()
const {getAllJobs, addNewJob, updateJob} = require('../controllers/jobControllers')

router.route('/').get(getAllJobs).post(addNewJob).patch(updateJob)

module.exports = router