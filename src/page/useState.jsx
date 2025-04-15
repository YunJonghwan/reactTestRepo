import React, { useState } from 'react';


function useStateExample() {
  const [count, setCount] = useState(5);
  console.log(count);
  return (
    <div>
      <button onClick={() => setCount(0)}>리셋</button>
    </div>
  )
}

export default useStateExample