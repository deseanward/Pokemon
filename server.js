// Import express
const express = require("express");

// Import the Pokemon model
const Pokemon = require("./models/pokemon-model");
// Import existing Pokemon data
const pokemon = require("./models/pokemon");

const jsxEngine = require("jsx-view-engine");
require("dotenv").config();
const mongoose = require("mongoose");

// Create an instance of express
const app = express();

// Create a variable for the port
const PORT = 3000;

// Configure the app
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

// Middleware
app.use((req, res, next) => {
  console.log(`Requested - ${req.method}: ${req.url}`);
  next();
});

app.use(express.urlencoded({ extended: false }));

//**** Create routes ****//
app.get("/", (req, res) => {
  res.send(`
  <h1>Welcome to the Pokemon App!</h1>
  <a href='/pokemon'>View All</a>`);
});

// ***** Get all of the Pokemon from the database ***** //
app.get("/pokemon", async (req, res) => {
  try {
    //Query all Pokemon
    let pokemonFromDB = await Pokemon.find({});
    console.log(pokemonFromDB);

    if (!pokemonFromDB.length)
      pokemonFromDB = await Pokemon.insertMany(pokemon);

    res.render("Index", {
      pokemon: pokemonFromDB,
    });
  } catch (error) {
    console.log("There was an error fetching the Pokemon: ", error);
  }
});


// ***** Create A New Pokemon Page ***** //
app.get("/pokemon/new", (req, res) => {
  res.render("New", {});
});


// ***** Post The New Pokemon To The DB ***** //
/**
 * @path /pokemon
 * @method POST
 * @action index
 * @description create a new Pokemon and re-direct the user
 */
app.post("/pokemon", async (req, res) => {
  // Create a new Fruit in db
  try {
    const createdPokemon = await Pokemon.create(req.body);
    console.log("Created: ", createdPokemon);

    // Redirect the user after post
    res.redirect("/pokemon");
  } catch (error) {
    console.log("Error creating Pokemon: ", error);
  }
});


// ***** Display Individual Pokemon
app.get("/pokemon/:id", async (req, res) => {
  const { id } = req.params;
  const pokemon = await Pokemon.findById(id);
  res.render("Show", {
    pokemon: pokemon,
  });
});


// ***** Connect to database
mongoose.connect(process.env.MONGO_URI);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

// Listen to the port
app.listen(PORT, () => {
  console.log(`Server running of port: ${PORT}`);
});
