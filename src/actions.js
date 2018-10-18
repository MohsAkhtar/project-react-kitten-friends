import { CHANGE_SEARCHFIELD } from "./constants.js";

// Capitalise type as it is a constant
export const setSearchField = text => ({
  type: "CHANGE_SEARCHFIELD",
  payload: text
});
