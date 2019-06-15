import { _getQuestions, _saveQuestionAnswer } from "./../utils/_DATA";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

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
