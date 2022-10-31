import React from 'react';

// TODO: Add a comment explaining what a react component is
// Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
function HelloReact(someText) {
  const text = 'some text 2';
  // const text = someText;

  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  // jsx is a syntax extension of javascript which produces React "elements"
  // curly braces embeds javascript expressions in jsx
  return <p>Hello World! Here is {text}</p>;
}

HelloReact('some more text')

export default HelloReact;
