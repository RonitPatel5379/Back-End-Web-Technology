const fs = require('fs')
const path = require('path')

const filename = 'temp.txt'
const filepath = path.join(__dirname,filename)

// fs.writeFile(filepath,'This is the temped deleting file.',(err)=>{
//   if(err) {
//     console.log(err)
//   }
//   else {
//     console.log("File Created Successfully")
//   }
// })

fs.unlink(filepath,(err)=>{
  if(err) {
    console.log(err)
  }
  else {
    console.log("File Deleted Successfully")
  }
})