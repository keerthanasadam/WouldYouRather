import { SAVE_QUESTION_ANSWER, ADD_QUESTION } from "../actions/questions";
import { RECEIVE_USERS } from "./../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case SAVE_QUESTION_ANSWER: {
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer
          }
        }
      };
    }
    case ADD_QUESTION: {
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: state[action.authedUser].questions.concat(
            action.question.id
          )
        }
      };
    }
    default:
      return state;
  }
}
