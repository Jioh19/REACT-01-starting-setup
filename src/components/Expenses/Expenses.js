import { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

function Expenses(props) {
	const [year, setYear] = useState("2020");

	const filterChangeHandler = (year) => {
		setYear(year);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === year;
	});

	

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter
					selected={year}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpensesList items={filteredExpenses}/>
			</Card>
		</div>
	);
}

export default Expenses;
