const fs = require('fs')
const path = require('path')

const filename = 'output.txt'
const filepath = path.join(__dirname,filename)

fs.writeFile(filepath,'This is the async output file.',(err)=>{
  if(err) {
    console.log(err)
  }
  else {
    console.log("File Created Successfully")
  }
})