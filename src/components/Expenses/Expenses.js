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
	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter
					selected={year}
					onChangeFilter={filterChangeHandler}
				/>
				{props.items.map((expense) => (
					<ExpenseItem
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
