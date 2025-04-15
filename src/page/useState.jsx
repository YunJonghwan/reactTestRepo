import React, { useState } from 'react';


function useStateExample() {
  const [randomNumber, setRandomNumber] = useState(() => Math.floor(Math.random() * 100));
  return (
    <div>
      {randomNumber}
    </div>
  )
}

export default useStateExample