import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('test removeExpense action', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('test editExpense action', () => {
  const action = editExpense('neji', { 'dojutsu': 'byakugan' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'neji',
    updates: {
      'dojutsu': 'byakugan'
    }
  });
});

test('test editExpense action 2', () => {
  const action = editExpense('123abc', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  });
});

test('test addExpense action object with provided values', () => {
  const expense = {
    description: 'rend',
    amount: 1350,
    createdAt: 1000,
    note: 'Last months rent'
  };  

  const action = addExpense(expense);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expense,
      id: expect.any(String)
    }
  });
});

test('test addExpense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
    }
  });
});