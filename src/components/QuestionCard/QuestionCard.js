import React from 'react';
import { useNavigate } from 'react-router-dom';
import './QuestionCard.css';

import avatar from '../../images/male-avatar.png';

const QuestionCard = ({ cardData, users }) => {
  const navigate = useNavigate();
  const id = cardData.id;
  const authorId = cardData.author;

  const time = cardData.timestamp;
  const date = new Date(time).toLocaleDateString('en-US');

  //console.log(date);
  return (
    <div className='question-card'>
      <img
        src={users[authorId].avatarURL || avatar}
        alt=''
        className='question-image'
      />
      <h2 className='question-user'>{users[authorId].name || 'User name'}</h2>
      <p className='question-date'>{date || '2020'}</p>
      <button
        className='view-button button'
        type='submit'
        onClick={(e) => {
          e.preventDefault();
          navigate(`/question/:id${id}`);
        }}
      >
        View Question
      </button>
    </div>
  );
};

export default QuestionCard;
