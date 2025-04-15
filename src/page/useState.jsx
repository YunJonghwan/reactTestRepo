import React, { useState } from 'react';


function useStateExample() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      {isVisible && <p>보이기 상태!</p>}
      <button onClick={() => setIsVisible(!isVisible)}>토글</button>
    </div>
  )
}

export default useStateExample