import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends Component {
  onSubmit = (expense) => {
    const { expense: { id } } = this.props;
    this.props.editExpense(id, expense);
    this.props.history.push('/');
  }

  onRemove = () => {
    const { expense } = this.props;
    this.props.removeExpense(expense);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <ExpenseForm 
          expense={this.props.expense}
          onSubmit={this.onSubmit}/>
        <button 
          onClick={this.onRemove}>
          Remove
        </button>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (expense) => dispatch(removeExpense({ id: expense.id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);