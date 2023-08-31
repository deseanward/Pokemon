const React = require("react");
const pokemon = require("../models/pokemon");

function New() {
  return (
    <div>
      <h1>Add Pokemon</h1>

      <form action='/pokemon' method='POST'>
        Name: <input type='text' name='name' />
        <br />
        Image: <input type='text' name='img' />
        <br />
        <br />
        <input type='submit' name='' value='Create Pokemon' />
      </form>
    </div>
  );
}

module.exports = New;
