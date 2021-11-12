import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Navbar.css';
import userAvatar from '../../images/muslim-woman.png';

import { connect } from 'react-redux';

const Navbar = ({ users, authedUserId }) => {
  const userId = authedUserId;
  const user = users[userId];

  return (
    <header className='header'>
      <nav className='nav'>
        <NavLink
          to='/dashboard'
          className={({ isActive }) =>
            'nav__link' + (isActive ? ' active-link' : '')
          }
        >
          <span className='nav__text'>Dashboard</span>
        </NavLink>
        <NavLink
          to='/add'
          className={({ isActive }) =>
            'nav__link' + (isActive ? ' active-link' : '')
          }
        >
          <span className='nav__text'>Add Question</span>
        </NavLink>
        <NavLink
          to='/leaderboard'
          className={({ isActive }) =>
            'nav__link' + (isActive ? ' active-link' : '')
          }
        >
          <span className='nav__text'>Leaderboard</span>
        </NavLink>
      </nav>

      <section className='user-section'>
        <h2 className='user-name'>{user.name || 'User Name'} </h2>
        <img
          src={user.avatarURL || userAvatar}
          alt=''
          className='user-avatar'
        />
        <Link className='logout__link' to='/logout'>
          Log out
        </Link>
      </section>
    </header>
  );
};

function mapStateToProps({ authedUser, users }) {
  return {
    authedUserId: authedUser.id,
    users: users,
  };
}
export default connect(mapStateToProps)(Navbar);
