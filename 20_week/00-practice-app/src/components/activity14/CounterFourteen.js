import React, { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  let [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
  const handleDecrement = () => {
    setCount((count - 1));
  };

  // TODO: MAKE ONE FUNCTION TO HANDLE BOTH INCREMENT / DECREMENT
  const handleCount = (x) => {
    setCount(count + x)
  }

  return (
    <div className="card text-center">
      Activity 14
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody */}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}

        handleIncrement2={() => handleCount(10)}
        handleDecrement2={() => handleCount(-100)}
      />
    </div>
  );
}
