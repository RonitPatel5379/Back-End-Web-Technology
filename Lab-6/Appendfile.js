const fs = require('fs')
const path = require('path')

const filename = 'output.txt'
const filepath = path.join(__dirname,filename)

fs.appendFile(filepath,'\nThis is the new updated file.',(err)=>{
  if(err) {
    console.log(err)
  }
  else {
    console.log("File Updated Successfully")
  }
})