import { createStore } from 'redux';

console.log('redux-subscribe-unsubscribe.js');

// (state = { count: 0 } -> if state is redux store is not initialized, set initial state to an JSON object with count = 0
// Action - an object that gets sent to the store
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      }
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

// dispatch() allows us to send and action object to the store
store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'DECREMENT'
});

store.dispatch({
  type: 'DECREMENT'
});

unsuscribe();

store.dispatch({
  type: 'DECREMENT'
});

store.dispatch({
  type: 'RESET'
});
