export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_EDIT = 'TOGGLE_EDIT';
export const UPDATE_TODO = 'UPDATE_TODO';

let lastId = 3;

export function addTodo(text) {
  return { type: ADD_TODO,
           id: lastId=lastId+1,
           text }
}

export function toggleTodo(id) {
  return { type: TOGGLE_TODO, id }  
}

export function deleteTodo(id) {
  return { type: DELETE_TODO, id }
}

export function toggleEdit(id) {
  return { type: TOGGLE_EDIT, id }
}

export function updateTodo(id, newtext) {
  return { type: UPDATE_TODO, id, newtext }
} 
