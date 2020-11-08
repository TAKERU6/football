import { ADD_PROFILE } from "../actions";

const initialState = {};
const forms = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROFILE:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          name: action.name,
          position: action.position,
          age: action.age,
          gender: action.gender
        }
      };
    default:
      return state;
  }
};

export default forms;
