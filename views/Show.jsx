const React = require("react");

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

function Index(props) {
  const { pokemon } = props;
  const firstLetter = pokemon.name.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = pokemon.name.slice(1);
  pokemon.name = firstLetterCap + remainingLetters;

  return (
    <div style={myStyle}>
      <h1>Gotta Catch 'Em All</h1>

      {pokemon.name}
      <br />
      <img src={pokemon.img} alt='Image' />
      <br />
      <br />
      <a href='/pokemon'>Back</a>
    </div>
  );
}

module.exports = Index;
