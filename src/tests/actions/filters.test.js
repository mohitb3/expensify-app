import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';

test('test setStartDate', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({ 
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('test setEndDate', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({ 
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('test setTextFilter via text', () => {
  const text = 'coffee';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('test setTextFilter via default text', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('test sortByDate', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
  });
});

test('test sortByAmount', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});
