import "./TodoItem.css";
import { useEffect, useRef } from "react";
import { useGlobalDispatch } from "../../store/StateManager";
import menuIcon from "../../assets/Hamburger_icon.svg.png";

const TodoItem = ({ edit, id, item, doneButton, editButton, menu }) => {
	const dispatch = useGlobalDispatch();
	const inputRef = useRef();

	const editClick = (e) => {
		e.preventDefault();
		dispatch({ type: "edit clicked", id });
	};

	useEffect(() => {
		if (edit === true) {
			inputRef.current.focus();
		}
	}, [edit]);

	const editTodo = (e) => {
		e.preventDefault();
		dispatch({
			type: "todo edited",
			id: id,
			todo: inputRef.current.value,
		});
	};

	const deleteClick = (e) => {
		e.preventDefault();
		dispatch({ type: "delete clicked", id });
	};

	const completeTodo = (e) => {
		e.preventDefault();
		dispatch({ type: "completed todo", id });
	};

	const deleteCompleted = (e) => {
		e.preventDefault();
		dispatch({ type: "completed deleted", id });
	};

	const toggleMenu = (e) => {
		e.preventDefault();
		dispatch({ type: "menu clicked", id });
	};

	const toggleCompletedMenu = (e) => {
		e.preventDefault();
		dispatch({ type: "completed menu clicked", id });
	};

	return (
		<span className="todo-item">
			<div className="li-container">
				<li>
					{edit ? (
						<form action="submit" onSubmit={editTodo}>
							<input ref={inputRef} type="text" defaultValue={item} />
						</form>
					) : (
						item
					)}
				</li>
			</div>
			<img
				src={menuIcon}
				onClick={doneButton ? toggleMenu : toggleCompletedMenu}
			/>
			{menu ? (
				<div className="menu">
					{editButton ? <button onClick={editClick}>Edit</button> : ""}
					<button onClick={doneButton ? deleteClick : deleteCompleted}>
						Delete
					</button>
					{doneButton ? <button onClick={completeTodo}>Done</button> : ""}
				</div>
			) : (
				""
			)}
		</span>
	);
};

export default TodoItem;
