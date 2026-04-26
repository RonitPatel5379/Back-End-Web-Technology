const {exec} = require('child_process')
const { error } = require('console')
const { stdout, stderr } = require('process')
exec("node --version",(error,stdout,stderr)=> {
  if(error) {
    console.log("Error is:",error)
    return
  }
  if(stderr) {
    console.log("Standard error is:",error)
    return
  }
  if(stdout) {
    console.log("Standard output is:",stdout)
  }
})