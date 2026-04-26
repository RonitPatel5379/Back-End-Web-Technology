const http = require('http')

const server = http.createServer((req,res)=>{
  if(req.url==='/') {
    res.setHeader('Content-Type','text/html')
    res.write("<h1>Hello World from home page</h1>")
    res.end()
  }
  else if(req.url==='/about') {
    res.setHeader('Content-Type','text/html')
    res.write("<b>Hello World from about page</b>")
    res.end()
  }
  else if(req.url==='/contact') {
    res.setHeader('Content-Type','text/html')
    res.write("<i>Hello World from contact page</i>")
    res.end()
  }
  else if(req.url==='/source') {
    res.setHeader('Content-Type','text/html')
    res.write("<li>Hello World from source page</li>")
    res.end()
  }
  else if(req.url==='/student') {
    res.setHeader('Content-Type','text/html')
    res.write("Hello World from student page")
    res.end()
  }
  else {
    res.write("404 page Not Found")
    res.end()
  }
})

const PORT = 4000
server.listen(4000,()=>{
  console.log(`Listening on PORT ${PORT}`)
})