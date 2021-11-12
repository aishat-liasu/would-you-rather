import './App.css';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';
import Logout from './Logout/Logout';
import NewQuestion from './NewQuestion/NewQuestion';
import QuestionPage from './QuestionPage/QuestionPage';
import Dashboard from './Dashboard/Dashboard';
import Leaderboard from './Leaderboard/Leaderboard';
import PageNotFound from './PageNotFound/PageNotFound';

import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { getInitialData } from '../actions/index';
import React, { useEffect } from 'react';

const App = (props) => {
  useEffect(() => {
    props.dispatch(getInitialData());
  }, []);

  return (
    <div className='App'>
      {props.userIn ? (
        <Routes>
          <Route path='' element={<Login />}></Route>
          <Route path='*' element={<Navigate replace to='/' />} />
        </Routes>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route exact path='dashboard' element={<Dashboard />} />
            <Route path='leaderboard' element={<Leaderboard />} />
            <Route path='add' element={<NewQuestion />} />
            <Route path='question/:id' element={<QuestionPage />} />
            <Route path='logout' element={<Logout />} />
            <Route path='/' element={<Navigate replace to='/dashboard' />} />
            <Route element={<PageNotFound />} />
          </Routes>
        </>
      )}
    </div>
  );
};

function mapStateToProps({ authedUser }) {
  return {
    userIn: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
