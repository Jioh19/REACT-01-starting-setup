import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
	return (
		<Card className="expenses">
			<ExpenseItem expense={props.items[0]} />
			<ExpenseItem expense={props.items[1]} />
			<ExpenseItem expense={props.items[2]} />
			<ExpenseItem expense={props.items[3]} />
		</Card>
	);
}

export default Expenses;
