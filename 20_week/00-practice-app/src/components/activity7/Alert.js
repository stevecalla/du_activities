import React from 'react';

// Our Alert function accepts on argument of `props`.
// This will be an object containing all of the props or properties that were passed to this component from the parent.
// We can expect to see "message" and "type" properties inside our "props" object.
function Alert(props) {
  // console.log(props);

  return (
    <div className={`alert alert-${props.type || 'success'}`} role="alert">
      <p>Activity 7</p>
      {props.message}
      <hr />
    </div>
  );
}

export default Alert;
