import React from 'react';

// TODO: Fix the return statement so that it renders an `h1` heading tag that introduces the creator
// function HelloDiv() {
//   return  "Hello";
// }
function HelloDiv() {
  let name = 'Litte Red';
  return  (
    <div>
      <h1>Hello! My name is {name}. Activity 4</h1>
      <hr />
    </div>
  )
}

// TODO: Fix the export statement
// Export statements are ES6 syntax that tell Javascript what "thing" we want to make available outside of this file
// export HelloDiv;
export default HelloDiv;
