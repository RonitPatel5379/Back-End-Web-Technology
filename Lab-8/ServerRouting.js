const express = require('express')

const server = express()

server.get("/",(req,res)=>{
  res.send("Hello World from home page")
})

server.get("/about",(req,res)=>{
  res.send("Hello World from about page")
})

server.get("/contact",(req,res)=>{
  res.send("Hello World from contact page")
})

server.get("/source",(req,res)=>{
  res.send("Hello World from source page")
})

server.get("/student",(req,res)=>{
  res.send("Hello World from student page")
})

server.use((req,res)=>{
  res.send("404 page not found")
})

server.listen(4000,()=>{
  console.log("Listening at PORT 4000")
})