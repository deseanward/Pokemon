const React = require("react");

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};


function Index(props) {
  const { pokemon } = props;

  return (
    <div style={myStyle}>
      <h1>See All The Pokemon!</h1>
      <p><a href='/pokemon/New'>Add a Pokemon</a></p>
      
      <ul>
        { pokemon ?
          pokemon.map((pm, i) => {
          const firstLetter = pm.name.charAt(0);
          const firstLetterCap = firstLetter.toUpperCase();
          const remainingLetters = pm.name.slice(1);
          pm.name = firstLetterCap + remainingLetters;

          return (
            <li key={i}>
              <a href={`/pokemon/${pm._id}`}>{pm.name}</a> <br /><br />
            </li>
          );
        })
        : null
      }
      </ul>
    </div>
  );
}

module.exports = Index;
