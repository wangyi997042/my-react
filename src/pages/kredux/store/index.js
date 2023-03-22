// createStore, applyMiddleware,
import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from '../redux'

// import thunk from 'redux-thunk'
// import logger from 'redux-logger'
// import promise from "redux-promise"

// import isPromise from 'is-promise'

export const countReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'MINUS':
      return state - action.payload;
    default:
      return state
  }
}
// combineReducers({ home: countReducer })
//
const store = createStore(combineReducers({ count: countReducer }), applyMiddleware(thunk, promise, logger))

export default store;

function thunk({ getState, dispatch }) {
  return (next) => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState)
    }
    return next(action)
  }
}

function logger({ getState, dispatch }) {
  return (next) => (action) => {
    console.log('-----------------------------------')
    console.log('%cpre state', 'color: red', getState());

    const returnValue = next(action);

    console.log('%c next state', 'color: red', returnValue);

    console.log("--------------------------")

    return returnValue;
  }
}

function promise({ getState, dispatch }) {
  return (next) => (action) => (isPromise(action) ? action.then(dispatch) : next(action))
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
