import { ADD_TODO, TOGGLE_TODO, toggleTodo, addTodo } from '../actions/Actions';
import { combineReducers } from 'redux'

const todosList = [
    { text: 'Go shopping',
      completed: false,
      id: 1 },
    { text: 'Study english',
      completed: false,
      id: 2 },
    { text: 'Eat dinner',
      completed: false,
      id: 3 }    
  ]

function todos(state = todosList, action) {
   switch (action.type) {
     case ADD_TODO:
       return [
           ...state,
           { text: action.text,
             completed: false,
             id: action.id }
         ]
     case TOGGLE_TODO:
       return state.map(todo => {
         if (todo.id === action.id) {
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
