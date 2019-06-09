import { _getUsers } from "./../utils/_DATA";
import { setAuthedUser } from "./authedUser";
// export const id = "sarahedo"; // remove once login implemented
export const RECEIVE_USERS = "RECEIVE_USERS";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

export function handleGetUsers() {
  return dispatch => {
    return _getUsers().then(users => {
      dispatch(receiveUsers(users));
      // dispatch(setAuthedUser(id)); // remove once login implemented
    });
  };
}
