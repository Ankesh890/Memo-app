import React, { useState, useCallback, useMemo } from 'react';
import Counter from './Counter';
import Timer from './Timer';

// Parent Component
const App = () => {
  // State for Counter
  const [count, setCount] = useState(0);

  // State for Timer
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  // Memoized callback functions for Counter
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  // Memoized callback functions for Timer
  const startTimer = useCallback(() => {
    if (!intervalId) {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(id);
    }
  }, [intervalId]);

  const pauseTimer = useCallback(() => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }, [intervalId]);

  const stopTimer = useCallback(() => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    setTime(0);
  }, [intervalId]);

  // Memoize an expensive calculation (example)
  const expensiveComputation = useMemo(() => {
    console.log('Performing expensive computation');
    return count * 1000;
  }, [count]);

  console.log('Rendering App');

  return (
    <div>
      <h1>React Performance Optimization Example</h1>

      {/* Counter Component */}
      <Counter count={count} onIncrement={increment} onDecrement={decrement} />

      {/* Timer Component */}
      <Timer time={time} onStart={startTimer} onPause={pauseTimer} onStop={stopTimer} />

      {/* Expensive Computation */}
      <p>Expensive Computation Result: {expensiveComputation}</p>
    </div>
  );
};

export default App;
