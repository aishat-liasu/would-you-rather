import { _saveQuestionAnswer, _saveQuestion } from '../utils/API';

import { addAnswerToUsers, addQuestionToUsers } from './Users';
// action creators to add question
// add answer to questions
// handle add answer
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SET_UNANSWERED_QUESTIONS = 'SET_UNANSWERED_QUESTIONS';

export function handleAddAnswer(answerText, questionId) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return _saveQuestionAnswer({
      authedUser: authedUser.id,
      questionId,
      answerText,
    }).then((res) => {
      console.log(res);
      dispatch(addAnswerToQuestions(res.questions));
      dispatch(addAnswerToUsers(res.users));
    });
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser.id,
    }).then((newQuestion) => {
      dispatch(addQuestion(newQuestion));
      dispatch(addQuestionToUsers(newQuestion));
    });
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}
function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

function addAnswerToQuestions(questions) {
  return {
    type: ADD_ANSWER,
    questions,
  };
}
