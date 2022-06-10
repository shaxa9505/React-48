import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux"

const initialState = 0;

const reducer = (state = initialState, {type, payload}) => {
  switch(type){
    case "INCREMENT" : 
    return state + 1
    default : 
    return state
  }
} 

// let state = reducer(initialState, {type: "INCREMENT"});
// state = reducer(state, {type: "INCREMENT"})
// console.log(state);

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch({type: "INCREMENT"});
store.dispatch({type: "INCREMENT"});





ReactDOM.render(
  <React.StrictMode>
    <> 
    </>
  </React.StrictMode>,
  document.getElementById('root')
);


