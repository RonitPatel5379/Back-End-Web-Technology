const fs = require('fs')
const path = require('path')

const filename = 'info.txt'
const filepath = path.join(__dirname,filename)

// try {
//   fs.writeFileSync(filepath,'This is the new sync file.','utf-8')
//   console.log("File Created Successfully")
// } 
// catch(err) {
//   console.log(err)
// }

try {
  const data=fs.readFileSync(filepath,'utf-8')
  console.log(data)
} 
catch(err) {
  console.log(err)
}