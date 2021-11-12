import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>404 Error</h1>
      <h2>Page Not Found</h2>
      <button
        className='button'
        onClick={() => {
          navigate(`/dashboard`);
        }}
      >
        Go Back to Dashboard
      </button>
    </div>
  );
};

export default PageNotFound;
