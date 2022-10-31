import React from 'react';

// TODO: Create a `name` variable
let name = 'whatever';

// TODO: Create a `thoughts` variable
// This should be a string regarding what you think of React
let thoughts = 'whatever whatever whatever'

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <p>Activity 6</p>
          {/* TODO: Add your name variable */}
          {/* <h1>Hi! My name is (insert name here)</h1> */}
          <h1>Hi! My name is {name}</h1>
          {/* TODO: Add your number of letters variable */}
          {/* <h2>My name has (insert number of letters in name here) letters</h2> */}
          <h2>My name has {name.length} letters</h2>
          {/* TODO: Add your thoughts variable */}
          {/* <h2>I think React (insert thoughts about React here)</h2> */}
          <h2>I think React {thoughts}</h2>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
