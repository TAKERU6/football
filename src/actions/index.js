export const ADD_PROFILE = "ADD_PROFILE";

let id = 1;
export const addProfile = (name, position, age, gender, message) => {
  return {
    type: ADD_PROFILE,
    id: id++,
    name,
    position,
    age,
    gender,
    message
  };
};
