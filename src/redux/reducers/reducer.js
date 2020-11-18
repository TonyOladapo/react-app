const initialState = {
  users: [
    { name: "Tony" },
    { name: "Awal" },
    { name: "Zak" },
    { name: "Adwoa" },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      let newUser = { name: action.payload };
      //returns a new copy of the users state and adds a new user to the state.
      return { ...state, users: [...state.users, newUser] };

    default:
      return state;
  }
};

export default reducer;
