import React from 'react';

// Memoized Timer Component
const Timer = React.memo(({ time, onStart, onPause, onStop }) => {
  console.log('Rendering Timer');

  return (
    <div>
      <h2>Timer: {time}s</h2>
      <button onClick={onStart}>Start</button>
      <button onClick={onPause}>Pause</button>
      <button onClick={onStop}>Stop</button>
    </div>
  );
});

export default Timer;
