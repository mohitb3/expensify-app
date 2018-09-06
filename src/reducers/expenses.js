// Expenses reducer default state
const expensesReducerDefaultState = [];

// Expenses reducer
export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      if (state.filter(({ id }) => id === action.expense.id).length === 0) {
        return [...state, action.expense];
      }
      return state;
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {...expense, ...action.updates};
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};