import React, { useState } from 'react';

function useState4() {
  const [items, setItems] = useState([]);
  
  return (
    <div>
      <button onClick={() => setItems([...items, "새 항목"])}>추가</button>
      <ul>{items.map((item, i) => <li key={i}>{item}</li>)}</ul>
    </div>
  )
}

export default useState4