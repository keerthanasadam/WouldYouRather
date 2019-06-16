import {
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from "./../utils/_DATA";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

export function saveQuestionAnswer({ authedUser, qid, answer }) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  };
}

export function addQuestion(question, authedUser) {
  return {
    type: ADD_QUESTION,
    question,
    authedUser
  };
}

export function handleGetQuestions() {
  return dispatch => {
    return _getQuestions().then(questions => {
      dispatch(receiveQuestions(questions));
    });
  };
}

export function handleSaveQuestionAnswer(info) {
  return dispatch => {
    return _saveQuestionAnswer(info)
      .then(() => dispatch(saveQuestionAnswer(info)))
      .catch(e => console.warn("Error happend while saving the answer", e));
  };
}

export function handleAddQuestion(info) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return _saveQuestion({
      optionOneText: info.optionOneText,
      optionTwoText: info.optionTwoText,
      author: authedUser
    })
      .then(question => dispatch(addQuestion(question, authedUser)))
      .catch(e => console.warn("Error happend while adding question", e));
  };
}
