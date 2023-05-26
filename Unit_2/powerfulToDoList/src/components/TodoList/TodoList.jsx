import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";
import { useMemo } from "react";
import { useGlobalState } from "../../store/StateManager";

const TodoList = () => {
	const { state } = useGlobalState();

	const listOutput = useMemo(() => {
		return state.list.map((item, index) => {
			return (
				<TodoItem
					id={index}
					key={index}
					item={item.todo}
					edit={item.edit}
					menu={item.menu}
					editButton={true}
					doneButton={true}
				/>
			);
		});
	}, [state.list]);

	const completedListOutput = useMemo(() => {
		return state.completedList.map((item, index) => {
			return (
				<TodoItem
					id={index}
					key={index}
					item={item.todo}
					edit={item.edit}
					menu={item.menu}
					editButton={false}
					doneButton={false}
				/>
			);
		});
	}, [state.completedList]);

	return (
		<section className="todo-list">
			<ul>{listOutput}</ul>
			{state.completedList.length === 0 ? "" : <h1>Completed</h1>}
			<ul>{completedListOutput}</ul>
		</section>
	);
};

export default TodoList;
