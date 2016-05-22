import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import todoApp from './reducers/Reducers';
import {ADD_TODO, addTodo} from './actions/Actions';
import App from './App';


let store = createStore(todoApp)

store.dispatch(addTodo('new task'))
console.log(store.getState())

render(
    <App />,
   document.getElementById('app')
);
