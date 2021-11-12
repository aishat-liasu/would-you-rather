import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { setAuthedUserToNull } from '../../actions/AuthUser';

const Logout = ({ dispatch }) => {
  useEffect(() => {
    dispatch(setAuthedUserToNull(null));
  }, []);

  return <Navigate to='/' />;
};

export default connect(null)(Logout);
