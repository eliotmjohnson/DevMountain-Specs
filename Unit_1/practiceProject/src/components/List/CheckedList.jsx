import "./CheckedList.css";
import List from "./List";

const CheckedList = (props) => {
	return (
		<section className="checked-list">
			<h1>Completed</h1>
			<List
				checkedList={props.checkedList}
				newList={props.newList}
				setNewList={props.setNewList}
				setCheckedList={props.setCheckedList}
			></List>
		</section>
	);
};

export default CheckedList;
