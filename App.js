//import logo from './logo.svg';
//import ExpenseItem from './components/ExpenseItem';
import React,{ useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App=()=> {
  const DUMMY_EXPENSES =[
    {id:'e1',title: 'car insurance',amount: 200, date:new Date(2022, 2, 29)},
    {id:'e2',title: 'Food',amount: 300, date:new Date(2021, 3, 30)},
    {id:'e3',title: 'rent',amount: 400, date:new Date(2020, 3, 31)},
    {id:'e4',title: 'travel',amount: 500, date:new Date(2022, 4, 26)}
  ]
  
  const [expenses, setExpenses] =useState(DUMMY_EXPENSES);
  const addExpenseHandler = expenses =>{
   setExpenses((prevExpenses)=>{
     return [expenses, ...prevExpenses];
   });

  }
  return (
    <div>
    <NewExpense onAddExpense = {addExpenseHandler}></NewExpense>
     <Expenses items={expenses}/>
    </div>
  );
}

export default App;
