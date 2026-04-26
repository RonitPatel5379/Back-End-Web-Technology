const exec = require("child_process")
const child = exec.spawn("cmd.exe",["/c","dir","/s"])

child.stderr.on("data",(data)=>{
  console.log("error",data)
})

child.stdout.on("data",(data)=>{
  console.log("output",data.toString())
})

child.on("data",(data)=>{
  console.log("close:",data)
})