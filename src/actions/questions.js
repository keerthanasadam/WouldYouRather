import { _getQuestions } from "./../utils/_DATA";

export const RECEIVE_Questions = "RECEIVE_Questions";
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_Questions,
    questions
  };
}

function handleGetQuestions() {
  return dispatch => {
    return _getQuestions().then(questions => {
      dispatch(receiveQuestions(questions));
    });
  };
}
