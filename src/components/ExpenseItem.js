import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
 const[title,setTitle]= useState(props.title)
 const handlerClick = ()=>{
 setTitle(`Updated`);
 console.log(title)

 }
  return (
    <Card className="expense-item">
       <ExpenseDate date = {props.date} />

      <div className="expense-item__description">
        <h2>{ title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>
      <button onClick={handlerClick}>Change Title</button>
    </Card>
  );
};
export default ExpenseItem;
