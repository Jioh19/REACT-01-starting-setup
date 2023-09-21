import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");
	const [newExpense, setNewExpense] = useState(false);
	let addExpense = "";

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveExpenseData(expenseData);
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	};

	function changeNewExpense() {
		if(newExpense) setNewExpense(false);
		else setNewExpense(true);
	}

	if (newExpense) {
		addExpense = (
			<form onSubmit={submitHandler}>
				<div className="new-expense__controls">
					<div className="new-expense__control">
						<label>Title</label>
						<input
							type="text"
							value={enteredTitle}
							onChange={titleChangeHandler}></input>
					</div>
					<div className="new-expense__control">
						<label>mount</label>
						<input
							type="number"
							value={enteredAmount}
							min="0.01"
							step="0.01"
							onChange={amountChangeHandler}></input>
					</div>
					<div className="new-expense__control">
						<label>Date</label>
						<input
							type="date"
							value={enteredDate}
							min="2019-01-01"
							max="2023-12-31"
							onChange={dateChangeHandler}></input>
					</div>
				</div>
				<div className="new-expense__actions">
					<button onClick={changeNewExpense}>Cancel</button>
					<button type="submit">Add Expense</button>
				</div>
			</form>
		);
	} else {
		addExpense = (
			<button onClick={changeNewExpense}>Add New Expense</button>
		);
	}

	return <div>{addExpense}</div>;
};

export default ExpenseForm;
