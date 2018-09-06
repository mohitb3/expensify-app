// Get visibile expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
  // Get array of all expenses which have the text in their description and within the startDate and endDate
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => { // sort all expenses in the filtered array from highest to lowest
    if (sortBy === 'date') {
      return -(a.createdAt - b.createdAt);
    } else if (sortBy === 'amount'){
      return -(a.amount - b.amount);
    }
  });
};