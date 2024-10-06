import React from 'react';

// Memoized Counter Component
const Counter = React.memo(({ count, onIncrement, onDecrement }) => {
  console.log('Rendering Counter');

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
});

export default Counter;
