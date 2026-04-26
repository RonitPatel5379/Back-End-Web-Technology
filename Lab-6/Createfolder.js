const fs = require('fs')
const path = require('path')

const foldername = 'my-data'
const folderpath = path.join(__dirname,foldername)

fs.mkdir(folderpath,(err)=>{
  if(err) {
    console.log(err)
  }
  else {
    console.log("Folder Created Successfully")
  }
})