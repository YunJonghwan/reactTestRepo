import React, { useState } from 'react';

function useState4() {
  const [profile, setProfile] = useState({ name: "", age: "" });
  
  return (
    <div>
      <input onChange={e => setProfile({ ...profile, name: e.target.value })} />
      <input onChange={e => setProfile({ ...profile, age: e.target.value })} />
    </div>
  )
}

export default useState4