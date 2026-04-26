const url = require("url")
const myurl = "https://sample.net/?building=magic&tub=thumb#condition"

const q = url.parse(myurl,true)

console.log("Protocol:",q.protocol)
console.log("Hostname:",q.hostname)
console.log("Pathname:",q.pathname)
console.log(q.search)
console.log(q.query)
// q.searchParams.forEach((value,key)=>{
//   console.log(key,value)
// })