import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('setup default state', () => {
  const action =  { type: '@@INIT' };
  const state = expensesReducer(undefined, action);
  expect(state).toEqual([]);
});

test('remove expense by id', () => {
  const id = '2';
  const action =  { type: 'REMOVE_EXPENSE', id };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('do not remove expense if invalid id', () => {
  const id = '-1';
  const action =  { type: 'REMOVE_EXPENSE', id };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('add expense', () => {
  const expense = {
    id: '4',
    description: 'Coffee',
    note: '',
    amount: 200,
    createdAt: 0
  };
  const action =  { type: 'ADD_EXPENSE', expense };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('add same expense', () => {
  const expense = expenses[0];
  const action =  { type: 'ADD_EXPENSE', expense };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses]);
});

test('edit expense', () => {
  const id = '3';
  const description = 'Debit Card'
  const action =  {   
    type: 'EDIT_EXPENSE',
    id,
    updates: {
      description
    }
  };
  const editedExpense = {
    id,
    description,
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
  };

  const state = expensesReducer(expenses, action);

  // check entire state
  expect(state).toEqual([ expenses[0], expenses[1], editedExpense]);

  // check state object that was edited
  expect(state[2]).toEqual(editedExpense);

  // check state object element that was edited
  expect(state[2].description).toBe(description);
});

test('do not edit expense', () => {
  const id = '35';
  const description = 'Debit Card'
  const action =  {
    type: 'EDIT_EXPENSE',
    id,
    updates: {
      description
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});