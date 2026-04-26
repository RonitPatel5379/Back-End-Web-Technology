const fs = require('fs');

const path = require("path");

try {
  fs.copyFileSync(path.join(__dirname,"source.txt"), path.join(__dirname,"backup.txt"));
  console.log("File Copied Successfully")
} catch (error) {
  console.log(error)
}