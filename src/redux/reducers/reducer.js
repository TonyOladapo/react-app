const initialState = {
  users: [{ name: "Tony" }, { name: "Awal" }, { name: "Zak" }],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return state;

    default:
      return state;
  }
};

export default reducer;
