import { ADD_TODO, addTodo } from '../actions/Actions';

const initialState = {
  todos: [
    { text: 'Go shopping',
      completed: false },
    { text: 'Study english',
      completed: false },
    { text: 'Eat dinner',
      completed: false }    
  ]
}

function todoApp(state = initialState, action) {
   switch (action.type) {
     case ADD_TODO:
       return Object.assign({}, state, {
         todos: [
           ...state.todos,
           { text: action.text,
             completed: false }
         ]
       })
     default:
       return state
   }
}

export default todoApp
