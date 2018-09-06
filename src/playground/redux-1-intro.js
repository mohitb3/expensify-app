import { createStore } from 'redux';

console.log('redux-101.js');

// (state = { count: 0 } -> if state is redux store is not initialized, set initial state to an JSON object with count = 0
// Action - an object that gets sent to the store
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
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

// suscribe allows you to do something when the state changes
// the return value from suscribe() is a function which allows you to unsuscribe from state changes
const unsuscribe = store.subscribe(() => {
  console.log('store = ', store.getState());
});

// dispatch() allows us to send an action object to the store
store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'DECREMENT'
});

store.dispatch({
  type: 'DECREMENT'
});

store.dispatch({
  type: 'DECREMENT'
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
});

store.dispatch({
  type: 'SET',
  count: 101
})
