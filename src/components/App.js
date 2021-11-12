import './App.css';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';
import Logout from './Logout/Logout';
import NewQuestion from './NewQuestion/NewQuestion';
import QuestionPage from './QuestionPage/QuestionPage';
import Dashboard from './Dashboard/Dashboard';
import Leaderboard from './Leaderboard/Leaderboard';
import PageNotFound from './PageNotFound/PageNotFound';

import { Routes, Route, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { getInitialData } from '../actions/index';
import React, { useEffect } from 'react';

const App = (props) => {
  useEffect(() => {
    props.dispatch(getInitialData());
  }, []);

  const location = useLocation();

  return (
    <div className='App'>
      {props.userIn ? (
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path={location.pathname} element={<Login />} />
        </Routes>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route exact path='/dashboard' element={<Dashboard />} />
            <Route exact path='/leaderboard' element={<Leaderboard />} />
            <Route exact path='/add' element={<NewQuestion />} />
            <Route exact path='/question/:id' element={<QuestionPage />} />
            <Route exact path='/logout' element={<Logout />} />
            <Route exact path='/pagenotfound' element={<PageNotFound />} />
            <Route path='*' element={<PageNotFound />} />
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
