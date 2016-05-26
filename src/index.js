import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import todoApp from './reducers/Reducers';
import { Provider } from 'react-redux'
import App from './App';


let store = createStore(todoApp)

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('app')
);
