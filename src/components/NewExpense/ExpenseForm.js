import {useState} from "react"
import "./ExpenseForm.css"

const ExpenseForm = (props) =>
{

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')


    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const submitHandler = (event) =>
    {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }


        props.onSaveExpenseData(expenseData)

        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')

    }


    const titleChangeHandler = (event) =>
    {
        setEnteredTitle(event.target.value)

    };

    const amountHandler = (event) =>
    {
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });

        setEnteredAmount(event.target.value)
    }

    const dateHandler = (event) =>
    {
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });

        setEnteredDate(event.target.value)
    }


    return (
        <form className="new-expense-form" onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={enteredDate}
                        onChange={dateHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button>Add Expense</button>
            </div>
        </form>
    )
}


export default ExpenseForm