export const initialState = {
  logged_in_user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return { ...state, logged_in_user: action.user };
    default:
      return state;
  }
};

export default reducer;
