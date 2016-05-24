import { ADD_TODO, TOGGLE_TODO, toggleTodo, addTodo } from '../actions/Actions';
import { combineReducers } from 'redux'

const todosList = [
    { text: 'Go shopping',
      completed: false },
    { text: 'Study english',
      completed: false },
    { text: 'Eat dinner',
      completed: false }    
  ]

function todos(state = todosList, action) {
   switch (action.type) {
     case ADD_TODO:
       return [
           ...state,
           { text: action.text,
             completed: false }
         ]
     case TOGGLE_TODO:
       return state.map(todo => {
         if (todo.text === action.text) {
           return Object.assign({}, todo, {
             completed: !todo.completed
           })
         }
         return todo
       })
     default:
       return state
   }
}
const todoApp = combineReducers({
  todos
})

export default todoApp
