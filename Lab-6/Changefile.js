const fs = require('fs');

fs.watch('watchme.txt', (eventType, filename) => {
  if (eventType === 'change') {
    console.log("File Changed");
  }
});

console.log("Watching for changes in watchme.txt...");
