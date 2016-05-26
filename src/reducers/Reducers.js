import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, TOGGLE_EDIT } from '../actions/Actions';
import { combineReducers } from 'redux';
import _ from 'lodash';

const todosList = [
    { text: 'Go shopping',
      completed: false,
      editing: false,
      id: 1 },
    { text: 'Study english',
      completed: false,
      editing: false,
      id: 2 },
    { text: 'Eat dinner',
      completed: false,
      editing: false,
      id: 3 }    
  ]

function todos(state = todosList, action) {
   switch (action.type) {
     case ADD_TODO:
       return [
           ...state,
           { text: action.text,
             completed: false,
             editing: false,
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
     case TOGGLE_EDIT:
       return state.map(todo => {
         if (todo.id === action.id) {
           return Object.assign({}, todo, {
             editing: !todo.editing
           })
         }
         return todo
       })
     case DELETE_TODO:
       return _.without(state, _.find(state, {id: action.id}))
     default:
       return state
   }
}


const todoApp = combineReducers({
  todos
})

export default todoApp
