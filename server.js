// Import express
const express = require("express");
const jsxEngine = require("jsx-view-engine");
const pokemon = require("./models/pokemon");

// Create an instance of express
const app = express();

// Create a variable for the port
const PORT = 3000;

// Configure the app
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());
// Mount the middleware

//**** Create routes ****//
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Pokemon App!</h1>");
});

// Display Pokemon List
app.get("/pokemon", (req, res) => {
  res.render("Index", {
    pokemon: pokemon,
  });
});

// Display Individual Pokemon
app.get("/pokemon/:id", (req, res) => {
    const {id} = req.params
  res.render('Show', {
    pokemon: pokemon[id]
  })
});

// Listen to the port
app.listen(PORT, () => {
  console.log(`Server running of port: ${PORT}`);
});
