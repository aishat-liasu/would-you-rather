import React from 'react';
import './LeaderCard.css';

import avatar from '../../images/male-avatar.png';

const LeaderCard = ({ userData, rank }) => {
  const numOfAnsweredQuestions = Object.keys(userData.answers).length;
  const askedQuestions = userData.questions.length;
  return (
    <div className='leader-card'>
      <p className='leader-rank leader-text'>{rank + 1}</p>
      <img src={userData.avatarURL || avatar} alt='' className='leader-image' />
      <div>
        <h2 className='leader-user'>{userData.name || 'User name'}</h2>
        <p className='leader-text'>
          {'Answered questions: ' + numOfAnsweredQuestions}
        </p>
        <p className='leader-text'>{'Asked questions: : ' + askedQuestions}</p>
      </div>
      <div>
        <p className='leader-text'>Score</p>
        <p className='leader-score'>
          {numOfAnsweredQuestions + askedQuestions}
        </p>
      </div>
    </div>
  );
};

export default LeaderCard;
