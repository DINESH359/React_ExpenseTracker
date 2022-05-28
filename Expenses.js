import React,{useState} from 'react';
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesList from './ExpensesList';

//import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

const Expenses=(props)=>{
    const[filteredYear, setFilteredYear] = useState('2020')
    const filterChangeHandler = selectedYear=>{
        
        setFilteredYear(selectedYear);
    };

    const filteredExpenses =props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
    });

    // let expensesContent = <p>No Expenses found</p> ;
    // if(filteredExpenses.length > 0){
    //     // expensesContent = filteredExpenses.map(expense =><ExpenseItem key={expense.id} title={expense.title} amount ={expense.amount} date={expense.date}></ExpenseItem>)
    // }
    
      return(
          <div>            
<Card className='expenses'>
<ExpensesFilter selected={filteredYear} onChangeFilter = {filterChangeHandler}></ExpensesFilter>
<ExpensesChart expenses ={filteredExpenses}></ExpensesChart>
<ExpensesList items={filteredExpenses} ></ExpensesList>

{/* {expensesContent} */}

{/* {filteredExpenses.length === 0 ? <p>No Expenses found</p> : filteredExpenses.map(expense =><ExpenseItem key={expense.id} title={expense.title} amount ={expense.amount} date={expense.date}></ExpenseItem>)} */}

{/* {filteredExpenses.map(expense =><ExpenseItem key={expense.id} title={expense.title} amount ={expense.amount} date={expense.date}></ExpenseItem>)} */}
    
    {/* <ExpenseItem title ={props.items[0].title} amount = {props.items[0].amount} date = {props.items[0].date}></ExpenseItem>
    <ExpenseItem title ={props.items[1].title} amount = {props.items[1].amount} date = {props.items[1].date}></ExpenseItem>
    <ExpenseItem title ={props.items[2].title} amount = {props.items[2].amount} date = {props.items[2].date}></ExpenseItem>
    <ExpenseItem title ={props.items[3].title} amount = {props.items[3].amount} date = {props.items[3].date}></ExpenseItem> */}
</Card>
</div>
       ) ;
    }
export default Expenses;