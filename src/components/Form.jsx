import React from 'react';
import { useState } from 'react';
function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <form>
        <label>Username</label>
        <input onChange={handleUsernameChange} type="text" />
        <label>Password</label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" />
        <button type="submit">Submit</button>
      </form>
      <p> username : {username}</p>
      <p>password :{password}</p>
    </div>
  );
}

export default Form;
