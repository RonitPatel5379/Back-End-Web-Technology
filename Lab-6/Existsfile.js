const fs = require('fs')
const path = require('path')

const filename = 'Existsfile.js'
const filepath = path.join(__dirname,filename)

if(fs.existsSync(filepath)) {
  console.log("File is exists")
}
else {
  console.log("File is not exists")
}