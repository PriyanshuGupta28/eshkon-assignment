import { combineReducers } from "redux";

// Reducer for managing user state
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return action.payload; // Update the user state with the payload (user data) when the action type is "LOGIN_USER"
    case "LOGOUT_USER":
      return {}; // Clear the user state when the action type is "LOGOUT_USER"
    default:
      return state; // Return the current state for other action types
  }
};

// Reducer for managing card state
const cardReducer = (
  state = { image: "", title: "", description: "", callToAction: "" },
  action
) => {
  switch (action.type) {
    case "UPDATE_CARD":
      return action.payload; // Update the card state with the payload (card data) when the action type is "UPDATE_CARD"
    default:
      return state; // Return the current state for other action types
  }
};

// Combine the userReducer and cardReducer using combineReducers
const rootReducer = combineReducers({
  user: userReducer, // Assign userReducer to the 'user' property in the root state
  card: cardReducer, // Assign cardReducer to the 'card' property in the root state
});

export default rootReducer;
