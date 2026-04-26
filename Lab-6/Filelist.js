const fs = require('fs')

fs.readdir('../Lab-6',(err,data)=>{
  if(err) {
    console.log(err)
    return
  }
  else {
    data.forEach((data1) => {
      console.log(data1)
    })
  }
})