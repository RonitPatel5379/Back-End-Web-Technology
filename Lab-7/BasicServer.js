const http = require('http')

const server = http.createServer((req,res)=>{
  res.write("Hello World")
  res.end()
})

const PORT = 3000
server.listen(3000,()=>{
  console.log(`Listening on PORT ${PORT}`)
})