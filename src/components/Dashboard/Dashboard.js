import React, { useState } from 'react';
import './Dashboard.css';

import QuestionCard from '../QuestionCard/QuestionCard';

import { connect } from 'react-redux';

const Dashboard = (props) => {
  console.log(props);
  const [category, setCategory] = useState(0);

  const answeredQuestionsIds = props.answeredQuestions;
  const questions = props.questions;
  const users = props.users;
  const unansweredQuestions = Object.keys(questions)
    .filter((item) => {
      return !answeredQuestionsIds.some((item2) => item === item2);
    })
    .map((id) => questions[id])
    .sort((a, b) => b.timestamp - a.timestamp);

  const answeredQuestions = answeredQuestionsIds
    .map((id) => questions[id])
    .sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div className='dashboard'>
      <div className='categories'>
        <span
          className={'category' + (category === 0 ? ' active-category' : '')}
          onClick={() => setCategory(0)}
        >
          Unanswered
        </span>
        <span
          className={'category' + (category === 1 ? ' active-category' : '')}
          onClick={() => setCategory(1)}
        >
          Answered
        </span>
      </div>
      <div className='card-list'>
        {category === 0
          ? unansweredQuestions.map((data) => {
              return (
                <QuestionCard key={data.id} cardData={data} users={users} />
              );
            })
          : answeredQuestions.map((data) => (
              <QuestionCard key={data.id} cardData={data} users={users} />
            ))}
      </div>
    </div>
  );
};

function mapStateToProps({ questions, users, authedUser }) {
  let answeredQuestions = {};
  Object.keys(authedUser).length > 0 && Object.keys(users).length > 0
    ? (answeredQuestions = Object.keys(users[authedUser.id]['answers']))
    : (answeredQuestions = {});

  return {
    answeredQuestions,
    questions,
    users,
  };
}

export default connect(mapStateToProps)(Dashboard);
