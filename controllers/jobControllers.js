const jobsModel = require('../Models/jobModel')
const jobData = require('../data/jobData')


const getAllJobs = async(request, response) => {
    try{
    const jobs = await jobsModel.find()
    if (jobs.length === 0)
    {
       const jobs = await jobsModel.insertMany(jobData)
    }
    response.status(200).json(jobs)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

const addNewJob = async(request, response) => {
    const newJob = request.body
    try{
        const existingJob = await jobsModel.findOne({jobID:request.body.jobID})
        if (existingJob)
        {
            return response.status(409).json({message:'Job ID already exsists.'})
        }
        const job = await jobsModel.create(newJob)
        response.status(201).json(job)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

const updateJob = async(request, response) => {
    const jobToBeUpdated = request.body
    try{
        
        const job = await jobsModel.findOneAndUpdate({jobID:jobToBeUpdated.jobID}, jobToBeUpdated)
        response.status(201).json(job)
    }
    catch(error)
    {
        response.status(500).json({message:error.message})
    }
}

module.exports = {getAllJobs, addNewJob, updateJob}