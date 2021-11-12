import React, { useState } from 'react';
import './Login.css';

import { connect } from 'react-redux';
import { setAuthedUser } from '../../actions/AuthUser';

const Login = (props) => {
  const [selectedUser, setSelectedUser] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(setAuthedUser(selectedUser));
  };

  return (
    <div className='login-page'>
      <h1>Would you rather? </h1>
      <form action='' className='login-form'>
        <h2 className=''>Login</h2>

        <select
          className='select-user'
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          <option value='' disabled checked>
            Select a user
          </option>
          {props.users &&
            Object.keys(props.users).map((user) => {
              const userObj = props.users[user];
              return (
                <option key={user} value={userObj.id}>
                  {userObj.name}
                </option>
              );
            })}
        </select>
        <button className='button' type='submit' onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

function mapStateToProps({ users }) {
  return {
    users: users,
  };
}

export default connect(mapStateToProps)(Login);
