const express=require('express')
const route=express.Router()

route.get('/',(request,response)=>{
    response.send(`Working`)
})

module.exports=route