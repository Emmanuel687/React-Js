import React from "react";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div className="App">
      <h1>Hello React</h1>
      <ExpenseItem
        id={expenses.at(0).id}
        title={expenses.at(0).title}
        amount={expenses.at(0).amount}
        date={expenses.at(0).date}
      ></ExpenseItem>

      <ExpenseItem
        id={expenses.at(1).id}
        title={expenses.at(1).title}
        amount={expenses.at(1).amount}
        date={expenses.at(1).date}
      ></ExpenseItem>

      <ExpenseItem
        id={expenses.at(2).id}
        title={expenses.at(2).title}
        amount={expenses.at(2).amount}
        date={expenses.at(2).date}
      ></ExpenseItem>

      <ExpenseItem
        id={expenses.at(3).id}
        title={expenses.at(3).title}
        amount={expenses.at(3).amount}
        date={expenses.at(3).date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
