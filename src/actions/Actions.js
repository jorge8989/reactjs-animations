export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'COMPLETE_TODO';

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function toggleTodo(text) {
  return { type: TOGGLE_TODO, text }  
}
