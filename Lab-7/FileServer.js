const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
  if(req.url==='/') {
    res.statusCode = 200
    fs.readFile('home.txt',(err,data)=>{
      if(err) {
        console.log(err)
      }
      else{
        res.end(data)
      }
    })
  }
  else if(req.url==='/about') {
    res.statusCode = 200
    fs.readFile('about.txt',(err,data)=>{
      if(err) {
        console.log(err)
      }
      else{
        res.end(data)
      }
    })
  }
  else if(req.url==='/contact') {
    res.statusCode = 200
    fs.readFile('contact.txt',(err,data)=>{
      if(err) {
        console.log(err)
      }
      else{
        res.end(data)
      }
    })
  }
  else {
    res.statusCode = 404
    res.end("404 page not found")
  }
})

const PORT = 5000
server.listen(5000,()=>{
  console.log(`Listening on PORT ${PORT}`)
})