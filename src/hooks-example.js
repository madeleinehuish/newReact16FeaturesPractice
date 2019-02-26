import React, { useState } from 'react';

function HooksExample() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(1);

  return (
    <div style={{ marginLeft: '50px'}}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Add
      </button>
      <button onClick={() => setCount(count -1)}>
        Remove
      </button>
    </div>
  );
}

export default HooksExample;
