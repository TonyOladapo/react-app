//Triggers the addUser function
export const addUser = (name) => {
  return {
    type: "ADD_USER",
    payload: name,
  };
};
