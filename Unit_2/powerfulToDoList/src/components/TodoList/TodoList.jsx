import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";
import { useGlobalState } from "../../store/StateManager";

const TodoList = () => {
	const { state } = useGlobalState();
	
	return (
		<section className="todo-list">
			<ul>
				{state.list.map((item, index) => {
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
				})}
			</ul>
			{state.completedList.length === 0 ? "" : <h1>Completed</h1>}
			<ul>
				{state.completedList.map((item, index) => {
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
				})}
			</ul>
		</section>
	);
};

export default TodoList;
