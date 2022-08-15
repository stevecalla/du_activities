// fs is a Node standard library package for reading and writing files
const fs = require('fs');

// Return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
fs.readFile('data.csv', 'utf8', (error, data) =>
  error ? console.error(error) : console.log(data)
);

// Uncomment this next function to write to the file with anything you pass in as process.argv[2]

fs.writeFile('csv.txt', process.argv[1], (err) =>
  err ? console.error(err) : console.log('Success!')
);


fs.appendFile('test.txt', "hello", (err) =>
  err ? console.error(err) : console.log('Success!')
);

fs.writeFile('message.txt', 'Hello Node', function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});

// fs.watchFile('data.csv`', function (curr, prev) {
//   console.log('the current mtime is: ' + curr.mtime);
//   console.log('the previous mtime was: ' + prev.mtime);
// });
