// const { Console } = require('console')
// const fs = require('fs/promises')
// const path = require('path')

// const filename = 'test.txt'

// const filepath = path.join(__dirname,filename)

// const writefile=fs.writeFileSync(filepath,'This is the new file.','utf-8')

// console.log(writefile)

// const readfile = fs.readFileSync(filepath,'utf-8')

// console.log(readfile)

// const appendfile = fs.appendFileSync(filepath,'\nThis is the updated file.','utf-8')

// console.log(appendfile)

// const deletefile = fs.unlinkSync(filepath)

// console.log(deletefile)

// const newfilename = "updated.txt"
// const newfilepath = path.join(__dirname,newfilename)
// const renamefile = fs.renameSync(filepath,newfilepath)
// console.log(renamefile)

// const filename = 'testAsync.txt'
// const filepath = path.join(__dirname,filename)

// fs.writeFile(filepath,'This is the async file.','utf-8',(err)=>{
//   if(err) {
//     console.log(err)
//   }
//   else {
//     console.log("File Write Successfully")
//   }
// })

// fs.readFile(filepath,'utf-8',(err,data)=>{
//   if(err) {
//     console.log(err)
//   }
//   else {
//     console.log(data)
//   }
// })

// fs.appendFile(filepath,'\nThis the updated async file.','utf-8',(err)=>{
//   if(err) {
//     console.log(err)
//   }
//   else {
//     console.log("File updated Successfully")
//   }
// })

// fs.unlink(filepath,(err)=> {
//   if(err) {
//     console.log(err)
//   }
//   else {
//     console.log("File deleted Successfully")
//   }
// })

// filename = 'Promises.txt'
// filepath = path.join(__dirname,filename)

// const file = __dirname

// fs.promises
// .readdir(file)
// .then((data)=>console.log(data))
// .catch((err)=>console.error(err))

// const file = __dirname
// fs.promises
// .readdir(file)
// .then((data)=>console.log(data)).catch((err)=>console.error(err))

// fs.promises
// .writeFile(filepath,'This is the promises file.','utf-8')
// .then(console.log("File created Successfully"))
// .catch((err)=>console.error(err))

// fs.promises
// .readFile(filepath,'utf-8')
// .then((data)=>console.error(data))
// .catch((err)=>console.error(err))

// fs.promises
// .appendFile(filepath,'\nThis is the updated data','utf-8')
// .then(console.log("File Updated Successfully"))
// .catch((err)=>console.error(err))

// fs.promises
// .unlink(filepath)
// .then(console.log("File deleted Successfully"))
// .catch((err)=>console.error(err))

// const filename ='asyncfile.txt'
// const filepath = path.join(__dirname,filename)
// const file = __dirname

// const readFolder = async () => {
//   try {
//     const data=await fs.promises.readdir(file)
//     console.log(data)
//   }
//   catch(err) {
//     console.error(err)
//   }
// }
// readFolder()

// const writefileexample = async()=> {
//   try {
//     await fs.writeFile(filepath,'This is a newly created file.','utf-8')
//     console.log("File created Successfully")
//   }
//   catch(err) {
//     console.error(err)
//   }
// }
// writefileexample()

// const readfileexample = async()=> {
//   try {
//     const data = await fs.readFile(filepath,'utf-8')
//     console.log(data)
//   }
//   catch(err) {
//     console.error(err)
//   }
// }
// readfileexample()

// const appendfileexample = async()=> {
//   try {
//     await fs.appendFile(filepath,'\nThis is a async-await file.','utf-8')
//     console.log("File updated Successfully")
//   }
//   catch(err) {
//     console.error(err)
//   }
// }
// appendfileexample()

// const deletefileexample = async()=> {
//   try {
//     await fs.unlink(filepaths)
//     console.log("File deleted Successfully")
//   }
//   catch(err) {
//     console.error(err.message)
//   }
// }
// deletefileexample()

// const EventEmitter = require('events')

// const emitter = new EventEmitter()
// emitter.on('greet',()=>{
//   console.log('hello ronit bhadania')
// })
// emitter.emit('greet')

// emitter.on('greet',(uname,prof)=>{
//   console.log(`hello ${uname},you are a ${prof}`)
// })
// emitter.emit('greet','ronit bhadania','full stack developer')

// import { createServer } from 'http'

// const server = createServer((req,res)=>{
//   if(req.url==='/') {
//     res.setHeader('Content-Type','text/html')
//     res.write("<h1>I am ronit bhadania</h1>")
//     res.end()
//   }
//   if(req.url==='/source') {
//     res.write("How are you?")
//     res.end()
//   }
//   if(req.url==='/contact') {
//     res.setHeader('Content-Type','text/plain')
//     res.write("Have a project or want to collaborate?")
//     res.end()
//   }
// })

// const PORT = 3000
// server.listen(PORT,()=>{
//   console.log(`Listening on PORT ${PORT}`)
// })

// import {add,sub,mul,div,PI} from './math.js'

// console.log(add(80,10))
// console.log(sub(50,10))
// console.log(mul(50,10))
// console.log(div(500,10))
// console.log(PI*100)

// import { log } from "console"
// import { exit } from "process"
// import readline, { createInterface } from "readline"

// const rl = readline.createInterface({
//   input:process.stdin,
//   output:process.stdout
// })

// const todos = []

// const showmenu = () => {
//   console.log("\n1. Add a Task")
//   console.log("2: View Tasks")
//   console.log("3. Exit")
//   rl.question("Choose an option:",handleInput)
// }

// const handleInput = (option) => {
//   if(option==='1') {
//     rl.question("Enter the task:",(task)=>{
//       todos.push(task)
//       console.log("Task added:",task)
//       showmenu()
//     })
//   }
//   else if(option==='2') {
//     console.log("\n Your Todo Lists:")
//     todos.forEach((task,index)=>{
//       console.log(`${index+1}. ${task}`)
//     })
//     showmenu()
//   }
//   else if(option==='3') {
//     console.log("Good Byee")
//     rl.close()
//   }
//   else {
//     console.log("Invalid Option.Please try again")
//   }
// }
// showmenu()

// import readline, { createInterface } from "readline"
// import fs from "fs"

// const rl = readline.createInterface({
//   input:process.stdin,
//   output:process.stdout
// })

// const fileCreation = () => {
//   rl.question('Enter your filename:',(filename)=>{
//     rl.question("Enter the content for your file:",(content)=>{
//       fs.writeFile(`${filename}.txt`,content,(err) => {
//         if(err) {
//           console.log(err)
//         }
//         else {
//           console.log(`File "${filename}.txt" createcd successfully`)
//         }
//         rl.close()
//       })
//     })
//   })
// }
// fileCreation()

// import https from 'https'
// import chalk from 'chalk'

// const getjoke = () => {
//   const url = 'https://official-joke-api.appspot.com/random_joke'
//   https.get(url,(response)=>{
//     let data = ""
//     response.on('data',(chunk)=>{
//       data = data + chunk
//     })
//     response.on('end',()=>{
//       const joke = JSON.parse(data)
//       // console.log(joke)
//       console.log(`Here is a random ${joke.type} joke:`)
//       console.log(chalk.red(`${joke.setup}`))
//       console.log(chalk.blue.bgRed.bold(`${joke.punchline}`))
//     })
//     response.on('error',()=>{
//       console.log(`Error fecthing the joke,${err.message}`)
//     })
//   })
// }
// getjoke()

// import https from "https"
// import readline from "readline"
// import chalk from "chalk"
// import { inflateRaw } from "zlib"

// const rl = readline.createInterface({
//   input:process.stdin,
//   output:process.stdout
// })

// const apikey = 'd92e453bbb1a911c66256d62'
// const url = `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`

// const convertCurrency = (amount,rate) => {
//   return (amount * rate).toFixed(2)
// }

// https.get(url,(response) => {
//   let data = ''
//   response.on('data',(chunk)=>{
//     data = data + chunk
//   })
//   response.on('end',()=>{
//     const rates = JSON.parse(data).conversion_rates
    
//     rl.question("Enter the amount in USD:",(amount)=> {
//       rl.question("Enter the target currency(e.g., INR,EUR,NPR):",(currency)=>{
//         const rate = rates[currency.toUpperCase()]
//         if(rate) {
//           console.log(chalk.blue.bgRed.bold(`${amount} USD is approximately ${convertCurrency(amount,rate)} ${currency}`))
//         }
//         else {
//           console.log("Invalid Currency Code")
//         }
//         rl.close()
//       })
//     })
//   })
// })




// import express from "express"
// // import { PORT } from "./env.js"
// import path from "path"
// // import "dotenv/config"
// const app = express()

// app.get("/",(req,res)=>{
//   res.send("<h1>Hello World</h1>")
// })
// app.get("/about",(req,res)=>{
//   res.send("<h1>Hello About page</h1>")
// })
// app.get("/contact",(req,res)=>{
//   res.send("<h1>Hello Contact page</h1>")
// })

// const PORT = process.env.PORT || 3000
// app.listen(PORT,()=>{
//   console.log(`Server Listening at PORT ${PORT}`)
// })


// import express from "express"
// import {PORT} from "./env.js"
// import path from "path"

// const app = express()

// const staticPath = path.join(import.meta.dirname,"demo")
// app.use("/demo",express.static(staticPath))

// app.get("/",(req,res)=>{
// // console.log(import.meta.url)
// // const __filename = new URL(import.meta.url).pathname
// // console.log(__filename)

//  const homePagePath = path.join(import.meta.dirname,"demo","try.html")
//  res.sendFile(homePagePath)
// })

// app.listen(PORT,()=>{
//   console.log("Server starting on PORT 3000")
// })


// import express from "express"
// import {PORT} from "./env.js"
// import path from "path"

// const app = express()

// // const response = await fetch("http://jsonplaceholder.typicode.com/todos/1")
// // const json = await response.json()
// // console.log(json)

// // console.log(__dirname)
// // console.log(__filename)
// console.log(import.meta.dirname)
// console.log(import.meta.filename)

// const staticPath = path.join(import.meta.dirname,"demo")
// console.log(staticPath)

// app.use(express.static(staticPath))

// app.listen(PORT,()=>{
//   console.log("Server starting on PORT 3000")
// })


// import express from "express"
// import {PORT} from "./env.js"
// import path from "path"

// const app = express()

// const staticPath = path.join(import.meta.dirname,"demo")
// app.use("/demo",express.static(staticPath))

// app.get("/product",(req,res)=> {
//   console.log(req.query)
//   res.send(`<h1>user serach for product ${req.query.page} ${req.query.limit} mobile</h1>`)
// })

// app.get("/profile/:username",(req,res)=>{
//   console.log(req.params)
//   res.send(`<h1>My username is ${req.params.username}</h1>`)
// })

// app.get("/profile/:username/article/:slug",(req,res)=>{
//   console.log(req.params)
//   const formatedSlug = req.params.slug.replace(/-/g," ")
//   res.send(`<h1>Article ${req.params.username} by ${formatedSlug}</h1>`)
// })

// app.listen(PORT,()=>{
//   console.log("Server starting on PORT 3000")
// })


import express from "express"
import {PORT} from "./env.js"
import path from "path"

const app = express()

const staticPath = path.join(import.meta.dirname,"demo")

app.use("/demo",express.static(staticPath))

app.use(express.urlencoded({extended:true}))
// app.get("/contact",(req,res)=>{
//   console.log(req.query)
//   res.redirect("/")
// })

app.post("/contact",(req,res)=>{
  console.log(req.body)
  res.redirect("/demo/try.html")
})

app.use((req,res)=>{
  // return res.status(404).send("<h1>page not found</h1>")
  return res.status(404).sendFile(path.join(import.meta.dirname,"views","404.html"))
})

app.listen(PORT,()=> {
  console.log("Server starting on PORT 3000")
})