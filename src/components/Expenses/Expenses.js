import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
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
				{filteredExpenses.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))}
			</Card>
		</div>
	);
}

export default Expenses;
