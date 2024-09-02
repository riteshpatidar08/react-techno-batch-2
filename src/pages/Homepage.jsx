import React from 'react';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <p>HOMEPAGE</p>
      <button
        onClick={handleClick}
        className="m-4 bg-violet-500 px-8 rounded-md text-white py-4"
      >
        Back
      </button>
    </div>
  );
}

export default Homepage;

