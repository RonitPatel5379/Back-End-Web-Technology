const express = require('express')
const fs = require('fs')

const server = express()

server.get("/",(req,res)=>{
  res.status(200)
  fs.readFile("home.txt",(err,data)=>{
    if(err) {
      console.log(err)
    }
    else {
      res.send(data.toString())
    }
  })
})

server.get("/about",(req,res)=>{
  res.status(200)
  fs.readFile("about.txt",(err,data)=>{
    if(err) {
      console.log(err)
    }
    else {
      res.send(data.toString())
    }
  })
})

server.get("/contact",(req,res)=>{
  res.status(200)
  fs.readFile("contact.txt",(err,data)=>{
    if(err) {
      console.log(err)
    }
    else {
      res.send(data.toString())
    }
  })
})

server.listen(5000,()=>{
  console.log("Listening at PORT 5000")
})