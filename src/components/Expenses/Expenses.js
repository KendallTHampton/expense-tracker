import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


const Expenses = (props) =>
{
    // Filter Expenses By Year
    const [filteredYear, setFilteredYear] = useState("2022");

    const filteredExpenses = props.items.filter(
        (expense) => expense.date.getFullYear().toString() === filteredYear

    );


    const filterChangeHandler = (selectedYear) =>
    {
        setFilteredYear(selectedYear);
    };

    // Delete Expenses


    const deleteHandler = (deleteExpense) =>
    {
        props.onDelete(deleteExpense)
    }


    return (
        <Card className='expenses'>
            <ExpenseFilter
                onChangeFilter={filterChangeHandler}
                selected={filteredYear}
            />

            <ExpensesChart
                expenses={filteredExpenses}
            />

            <ExpensesList
                items={filteredExpenses}
                onDelete={deleteHandler}
            />
        </Card>
    );
};

export default Expenses;
