import questions from "./questions";
import users from "./users";
import autheduser from "./authedUser";
import { combineReducers } from "redux";

export default combineReducers({
  questions,
  users,
  autheduser
});
