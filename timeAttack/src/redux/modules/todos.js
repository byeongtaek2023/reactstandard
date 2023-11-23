// import uuid from "react-uuid";
// import { type } from "@testing-library/user-event/dist/type";
import shortid from "shortid";


const ADD_TODO = "todo/ADD_TODO"
const DELETE_TODO = "todo/DELETE_TODO"
const SWITCH_TODO = "todo/SWITCH_TODO"

// export const addTodo = (payload) => {
//   return( type: ADD_TODO, payload);
// }
// export const deleteTodo = (payload) => {
//   return( type: DELETE_TODO, payload);
// }
// export const setTodo = (payload) => {
//   return( type: SWITCH_TODO, payload);
// }

const initialState = [
  {
    id: shortid.generate(),
    title: "",
    body: "",
    isDone: false,
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log('addtodo');
      return; //TODO: 여기 작성

    case DELETE_TODO:
      return; //TODO: 여기 작성

    case SWITCH_TODO:
      return; //TODO: 여기 작성

    default:
      return state;
  }
};

export default todos;
