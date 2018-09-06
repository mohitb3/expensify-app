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

// This setCount() function requires user to input a count parameter
// const setCount = ({ count }) => ({
//   type: 'SET',
//   count
// });

const resetCount = () => ({
  type: 'RESET'
});

// (state = { count: 0 } -> if state is redux store is not initialized, set initial state to an JSON object with count = 0
// Action - an object that gets sent to the store
const store = createStore((state = { count: 0 }, action) => {
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
});
console.log('Initial store = ', store.getState());

// This setCount() function will set count to the current count, if the user does not input a count parameter
const setCount = ({ count = store.getState().count } = {}) => ({
  type: 'SET',
  count
});

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

store.dispatch(setCount());
