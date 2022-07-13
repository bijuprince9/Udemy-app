import "./ExpenseItem.css";
import React, { useState } from 'react';
import Card from "../UI/Card.js";
import ExpenseDate from "./ExpenseDate.js";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated!..');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div on className="expense-item__price">
          ${props.amount}
        </div>
      </div>
      <button onClick={clickHandler}>Change date</button>
    </Card>
  );
};

export default ExpenseItem;
