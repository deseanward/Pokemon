// Import express
const express = require("express");

// Create an instance of express
const app = express();

// Create a variable for the port
const PORT = 3000;

// Configure the app

// Mount the middleware

//**** Create routes ****//
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Pokemon App!</h1>')
})


// Listen to the port
app.listen(PORT, () => {
  console.log(`Server running of port: ${PORT}`);
});
