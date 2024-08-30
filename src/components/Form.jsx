import React from 'react';
import { useState } from 'react';
function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="flex gap-10 justify-center">
      <form className="flex w-96 flex-col p-8 shadow-lg bg-slate-100 rounded-md ">
        <h1 className='text-center text-3xl font-bold text-blue-500'>Login</h1>
        <label className="text-lg font-semibold">Username</label>
        <input
          className="w-full h-10 border border-slate-700 p-2 rounded-md"
          onChange={handleUsernameChange}
          type="text"
        />
        <label className="text-lg font-semibold">Password</label>
        <input
          className="w-full h-10 border border-slate-700 p-2 rounded-md font-semibold"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button
          className="bg-blue-500 mt-4 px-8 py-2 rounded-md text-white "
          type="submit"
        >
          Submit
        </button>
      </form>
      <p> username : {username}</p>
      <p>password : {password}</p>
    </div>
  );
}

export default Form;
