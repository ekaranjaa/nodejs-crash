const fs = require('fs');

// Directories
console.log(__dirname); // Getting the current directory
console.log(__filename); // Getting the current filename

// Reading files
fs.readFile(`${__dirname}/docs/file.txt`, (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

// Writing files
/**
 * If you pass a file name that doesn't exit it'll be automatically
 * created and written.
 */
fs.writeFile(`${__dirname}/docs/file2.txt`, 'NodeJS crash', err => {
  if (err) throw err;
  console.log('File successfully written');
});

// Creating directories
if (!fs.existsSync(`${__dirname}/assets`)) {
  fs.mkdir(`${__dirname}/assets`, err => {
    if (err) throw err;
    console.log('Directory created');
  });
} else {
  console.log('Directory already exists');
}

//   Removing directories
if (fs.existsSync(`${__dirname}/assets`)) {
  fs.rmdir(`${__dirname}/assets`, err => {
    if (err) throw err;
    console.log('Directory deleted');
  });
} else {
  console.log("Directory doesn't exist");
}

// Deleting files
if (fs.existsSync(`${__dirname}/docs/file2.txt`)) {
  fs.unlink(`${__dirname}/docs/file2.txt`, err => {
    if (err) throw err;
    console.log('File removed');
  });
} else {
  console.log("File doesn't exist");
}
