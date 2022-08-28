const express = require('express');


const app = express();
const PORT = 3001;


// Serve images, css files, js files from the public directory
// Allows us to reference files with their relative path


app.use(express.static('public')); // http://localhost:3001/


app.listen(PORT, () =>
  console.log(`Serving static asset routes on port ${PORT}!`)
);
