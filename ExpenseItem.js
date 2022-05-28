import React from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
//import Expenses from './Expenses';

const ExpenseItem=(props)=> {
 // const [title , setTitle]= useState(props.title);

  let title = props.title;
//  const clickHandler = () =>{
//    setTitle('updated....!!!!!')
//    console.log(title);
//  }

  return (
    <li>
      <Card className='expense-item'>
      <ExpenseDate date = {props.date}></ExpenseDate>
        <div className='expense-item__description'>
          <h2>{title}</h2>
        </div>
        <div className='expense-item__price'> $ {props.amount}</div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}
export default ExpenseItem;
