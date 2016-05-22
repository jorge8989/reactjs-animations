import { ADD_TODO, addTodo } from '../actions/Actions';

const initialState = {
  todos: [
    { text: 'Go shopping' },
    { text: 'Study english' },
    { text: 'Eat dinner' }    
  ]
}

function todoApp(state = initialState, action) {
   switch (action.type) {
     case ADD_TODO:
       return Object.assign({}, state, {
         todos: [
           ...state.todos,
           { text: action.text }
         ]
       })
     default:
       return state
   }
}

export default todoApp
