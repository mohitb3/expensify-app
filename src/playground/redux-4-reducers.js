import { createStore } from 'redux';

// Action generators - functions that returns action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

// Reducers
// 1. Reducers are pure functions -> output of function only relies on the function input
// 2. Never change state or action
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);
console.log('Initial store = ', store.getState());

// suscribe allows you to do something when the state changes
// the return value from suscribe() is a function which allows you to unsuscribe from state changes
const unsuscribe = store.subscribe(() => {
  console.log('store = ', store.getState());
});

// dispatch() allows us to send an action object to the store
store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount());

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount(({ decrementBy: 10 })));

store.dispatch(setCount({ count: 101 }));