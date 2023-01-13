import React from "react";
import "./Newexpense.css"
import Expenseform from "./Expenseform";

const Newexpense = (props) => {

  const saveExpsenseDataHandler = (enteredExpenseData)=>{
    const expenseData = {
      ...enteredExpenseData,
      id:Math.random().toString()
    }
    console.log(expenseData)
    props.onAddExpense(expenseData)
  }
  return (
    <div className="new-expense">
      <Expenseform onSaveExpenseData={saveExpsenseDataHandler}/>
    </div>
  );
};

export default Newexpense;
