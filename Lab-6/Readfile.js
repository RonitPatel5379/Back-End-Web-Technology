const fs = require('fs')
const path = require('path')

const filename = 'data.txt'
const filepath = path.join(__dirname,filename)

// fs.writeFile(filepath,'This is the new file.',(err)=>{
//   if(err) {
//     console.log(err)
//   }
//   else {
//     console.log("File Created Successfully")
//   }
// })

fs.readFile(filepath,'utf-8',(err,data)=> {
  if(err) {
    console.log(err)
  }
  else {
    console.log(data)
  }
})