const React = require("react");

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

function Index(props) {
  const { pokemon } = props;
  console.log("test");
  return (
    <div style={myStyle}>
      <h1>See All The Pokemon!</h1>
      <ul>
        {pokemon.map((pm, i) => {
          const firstLetter = pm.name.charAt(0);
          const firstLetterCap = firstLetter.toUpperCase();
          const remainingLetters = pm.name.slice(1);
          pm.name = firstLetterCap + remainingLetters;

          return (
            <li key={i}>
              <a href={i}>{pm.name}</a> <br />
              <img src={pm.img} alt='Image' />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

module.exports = Index;
