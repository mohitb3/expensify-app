import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
  <div>
    <h1>ExpenseList</h1>
    <p>state.filters.text = {props.filters.text}</p>
    <p>state.expenses.length = {props.expenses.length}</p>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

// connect returns a function, that function takes a component (ExpenseList) as a parameter
export default connect(mapStateToProps)(ExpenseList);;