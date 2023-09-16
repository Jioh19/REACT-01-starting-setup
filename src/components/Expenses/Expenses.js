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
				<ExpenseItem expense={props.items[0]} />
				<ExpenseItem expense={props.items[1]} />
				<ExpenseItem expense={props.items[2]} />
				<ExpenseItem expense={props.items[3]} />
			</Card>
		</div>
	);
}

export default Expenses;
