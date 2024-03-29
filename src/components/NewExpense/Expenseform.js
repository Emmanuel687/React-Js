import React from "react";
import "./Expenseform.css";
import { useState } from "react";

const Expenseform = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(``);
  const [enteredAmount, setAmount] = useState(``);
  const [enteredDate, setDate] = useState(``);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);

    props.onSaveExpenseData(expenseData)
    setEnteredTitle(``);
    setAmount(``);
    setDate(``);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions ">
        <button type="submit" className=".new-expense button">
          Add Expense{" "}
        </button>
      </div>
    </form>
  );
};

export default Expenseform;
