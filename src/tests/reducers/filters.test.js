import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('set sortBy to date', () => {
  const action = { type: 'SORT_BY_DATE' };
  const initState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  };
  const state = filtersReducer(initState, action);
  expect(state.sortBy).toBe('date');
});

test('set text filter', () => {
  const text = 'my';
  const action = { type: 'SET_TEXT_FILTER', text };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test('set startDate filter', () => {
  const startDate = moment(0);
  const action = { type: 'SET_START_DATE', startDate };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(startDate);
});

test('set endDate filter', () => {
  const endDate = moment(-1000);
  const action = { type: 'SET_END_DATE', endDate };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(endDate);
});