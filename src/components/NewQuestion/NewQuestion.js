import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewQuestion.css';

import { connect } from 'react-redux';
import { handleAddQuestion } from '../../actions/Questions';

const NewQuestion = (props) => {
  const navigate = useNavigate();
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (option1.length > 5 && option2.length > 5) {
      props.dispatch(handleAddQuestion(option1, option2));
      navigate(`/dashboard`);
    } else {
      alert('Option text should be more than 5 characters');
    }
  };
  return (
    <div className='new-question-page'>
      <form action='' className='question-form'>
        <h2 className='form-title'>Add A New Question</h2>
        <p className='form-text'>Would you rather...</p>

        <input
          type='text'
          minLength='5'
          value={option1}
          onChange={(event) => {
            setOption1(event.target.value);
          }}
          className='form-input'
          placeholder='First thought ...'
        />

        <span className='break'>OR</span>

        <input
          type='text'
          minLength='5'
          value={option2}
          onChange={(event) => {
            setOption2(event.target.value);
          }}
          className='form-input'
          placeholder='Second thought ...'
        />

        <button className='button' onClick={handleSubmit}>
          Submit Question
        </button>
      </form>
    </div>
  );
};

function mapStateToProps({ authedUser }) {
  return {
    userIn: authedUser,
  };
}

export default connect(mapStateToProps)(NewQuestion);
