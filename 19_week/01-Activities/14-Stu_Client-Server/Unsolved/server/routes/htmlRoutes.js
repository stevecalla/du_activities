const path = require('path');

// TODO: Add comment explaining role of route below
//section this route is running the app by fetching the app code at the client/dist/index.html file
module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
