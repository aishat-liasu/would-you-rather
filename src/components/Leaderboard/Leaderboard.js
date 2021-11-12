import React from 'react';
import { connect } from 'react-redux';

import './Leaderboard.css';

import LeaderCard from '../LeaderCard/LeaderCard';

const Leaderboard = ({ leadersIds, users, authedUser }) => {
  console.log(users, leadersIds);

  return (
    <div>
      <h1>Leaderboard</h1>
      {leadersIds.map((id, index) => {
        return <LeaderCard userData={users[id]} rank={index} key={id} />;
      })}
    </div>
  );
};

function mapStateToProps({ users }) {
  return {
    leadersIds: Object.keys(users).sort((firstEl, secondEl) => {
      const nextUser =
        Object.keys(users[secondEl].answers).length +
        Object.keys(users[secondEl].questions).length;
      const user =
        Object.keys(users[firstEl].answers).length +
        Object.keys(users[firstEl].questions).length;
      return nextUser - user;
    }),
    users,
  };
}

export default connect(mapStateToProps)(Leaderboard);
