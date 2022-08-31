import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"

const ExpensesList = (props) =>
{
    if (props.items.length === 0)
    {
        return <h2 className='expenses-list__fallback'>No Expenses Found</h2>;
    }

    const deleteHandler = (id) =>
    {
        props.onDelete(id)
    }


    return (
        <ul className='expenses-list'>
            {props.items.length > 0 &&
                props.items.map((expenses) => (
                    <ExpenseItem
                        key={expenses.id}
                        title={expenses.title}
                        amount={expenses.amount}
                        date={expenses.date}
                        id={expenses.id}
                        onDelete={deleteHandler}
                    />


                ))}
        </ul >
    );
};

export default ExpensesList;
