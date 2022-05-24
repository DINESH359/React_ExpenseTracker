//import logo from './logo.svg';
//import ExpenseItem from './components/ExpenseItem';

import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App=()=> {
  const expenses =[
    {title: 'car insurance',amount: 200, date:new Date(2022, 2, 29)},
    {title: 'Food',amount: 300, date:new Date(2022, 3, 30)},
    {title: 'rent',amount: 400, date:new Date(2022, 3, 31)},
    {title: 'travel',amount: 500, date:new Date(2022, 4, 26)}
  ]
  
  const addExpenseHandler = expenses =>{
    console.log('in app.js');
    console.log(expenses);

  }
  return (
    <div>
    <NewExpense onAddExpense = {addExpenseHandler}></NewExpense>
     <Expenses items={expenses}/>
    </div>
  );
}

export default App;
