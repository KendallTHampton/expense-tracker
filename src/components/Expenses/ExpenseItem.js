import React from "react"
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"



const ExpenseItem = (props) =>
{


    const deleteHandler = () =>
    {
        props.onDelete(props.id)
    }


    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate
                    date={props.date}
                />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__controls">
                        <div className="expense-item__price">${props.amount}</div>
                        <button className="expense-item__delete" onClick={deleteHandler}>Delete</button>
                    </div>
                </div>
            </Card>
        </li>
    )

}

export default ExpenseItem