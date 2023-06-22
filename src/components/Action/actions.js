export const loginUser = (user) => {
  return {
    type: "LOGIN_USER", // Action type to indicate logging in a user
    payload: user, // User data to be stored in the state
  };
};

export const logoutUser = () => {
  return {
    type: "LOGOUT_USER", // Action type to indicate logging out a user
  };
};

export const updateCard = (card) => {
  return {
    type: "UPDATE_CARD", // Action type to indicate updating a card
    payload: card, // Updated card data to be stored in the state
  };
};
