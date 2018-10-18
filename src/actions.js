import {
  CHANGE_SEARCHFIELD,
  REQUEST_KITTENS_PENDING,
  REQUEST_KITTENS_SUCCESS,
  REQUEST_KITTENS_FAILED
} from "./constants.js";

// Capitalise type as it is a constant
export const setSearchField = text => ({
  type: "CHANGE_SEARCHFIELD",
  payload: text
});

export const requestKittens = () => dispatch => {
  dispatch({ type: REQUEST_KITTENS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_KITTENS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_KITTENS_FAILED, payload: error }));
};
