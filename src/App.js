import {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Birthday Celebration',
    amount: 450,
    date: new Date(2022, 5, 11),
  },
  {
    id: 'e4',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },

];

const App = () =>
{

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)


  const addExpenseHandler = (expense) =>
  {
    setExpenses((prevExpense) =>
    {
      return [expense, ...prevExpense]
    })
  }

  const deleteExpenseHandler = (expenseId) =>
  {

    setExpenses(prevExpense =>
    {
      const updatedExpense = prevExpense.filter(expense => expense.id !== expenseId)
      return updatedExpense
    })

  }

  const [showExpenses, setShowExpenses] = useState(true)


  const showExpenseHandler = () =>
  {
    setShowExpenses(!showExpenses)
  }

  let viewExpenses = <div className="viewExpenses"><button className="viewExpenses-button" onClick={showExpenseHandler} >Show Expenses</button></div>


  if (showExpenses)
  {
    viewExpenses =
      <div className="viewExpenses">
        <button className="viewExpenses-button" onClick={showExpenseHandler}> Hide Expenses</button>
        <Expenses
          items={expenses}
          onDelete={deleteExpenseHandler}
        />
      </div>
  }

  return (
    <div>

      <NewExpense
        onAddExpense={addExpenseHandler}
      />


      {viewExpenses}

    </div>
  );
}

export default App;
