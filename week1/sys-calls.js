// Import the File System (fs) module
const fs = require('fs');

// 1️⃣ Read the contents of sample.txt
fs.readFile('sample.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('❌ Error reading file:', err.message);
    return;
  }

  console.log('✅ File content:');
  console.log(data);

  // 2️⃣ Write the data to a new file (output.txt)
  const newData = data.toUpperCase(); // Example: convert text to uppercase
  fs.writeFile('output.txt', newData, (err) => {
    if (err) {
      console.error('❌ Error writing file:', err.message);
      return;
    }

    console.log('✅ Data successfully written to output.txt');
  });
});
