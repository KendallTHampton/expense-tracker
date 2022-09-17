import {useEffect} from "react";
import {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY_EXPENSES = [
  {
    id: '1',
    title: 'Welcome to My Expense Tracker App!',
    amount: 0,
    date: new Date(2022, 5, 11),
  },

  {
    id: '2',
    title: 'Add Your First Expense!',
    amount: 0,
    date: new Date(2022, 5, 11),
  }


];




const App = () =>
{

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);


  useEffect(() =>
  {
    localStorage.getItem('expenses') && setExpenses((prev) =>
    {
      const data = JSON.parse(localStorage.getItem('expenses'))

      let array = []

      data.map(element =>
      {
        if (typeof element.date === 'string')
        {
          element.date = new Date(element.date)
          array.push(element)
        }
        return array
      });
      if (array.length < 1)
      {
        return prev
      }
      return array

    })
  }, [])




  useEffect(() =>
  {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])





  const addExpenseHandler = (expense) =>
  {
    setExpenses((prevExpense) =>
    {
      const updatedExpense = [expense, ...prevExpense]
      return updatedExpense
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


      <h1
        style={{textAlign: 'center', size: '50px', color: 'white', backgroundColor: 'inherit', padding: '10px', marginTop: '15px'}}

      >
        Expense Tracker App</h1>

      <NewExpense
        onAddExpense={addExpenseHandler}
      />


      {viewExpenses}

    </div>
  );
}

export default App;
