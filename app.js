require('dotenv').config()
const express=require('express')
const app=express()
const jobRoutes=require('./routes/jobRoutes')
const { default: mongoose } = require('mongoose')
const port =3600

mongoose.connect(process.env.DB_URL) 
const db= mongoose.connection
db.on('Error',(errormessage)=>console.log(errormessage))
db.once('open',()=>console.log('Connection Established'))

app.use('/api/v1/job',jobRoutes)

app.listen(port,()=>console.log(`Srever is running at http://localhost:${port}`))