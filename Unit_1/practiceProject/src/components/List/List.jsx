import { useState } from "react";
import "./List.css";

const List = (props) => {
	const [newInput, setNewInput] = useState("");

	const deleteItem = (id) => {
		props.setNewList((prev) => {
			return prev.filter((item) => item.id !== id);
		});
	};

	const handleCheck = (e, id, item, checked, edit) => {
		if (
			e.target.localName === "div" &&
			(props.newList || props.checkedList).some((elem) => elem.id === id)
		) {
			props.setCheckedList((prev) => {
				const newItem = {
					id: id,
					item: item,
					checked: !checked,
					edit: false,
					needEdit: checked ? true : false,
				};

				return [newItem, ...prev];
			});
			props.setNewList((prev) => {
				return prev.filter((item) => id !== item.id);
			});
		}
	};

	const addChangeBox = (e, id) => {
		if (e.target.localName === "button") {
			props.setNewList((prev) => {
				return prev.map((item) => {
					if (id === item.id) {
						return { ...item, edit: !item.edit };
					} else return item;
				});
			});
		}
	};

	const captureEditInput = (e) => {
		setNewInput(e.target.value);
	};

	const editTodo = (e, id) => {
		e.preventDefault();
		props.setNewList((prev) => {
			return prev.map((item) => {
				if (id === item.id) {
					return { ...item, item: newInput, edit: false, checked: false };
				} else return item;
			});
		});
	};

	return (
		<ul className="list">
			{(props.newList || props.checkedList).map((listItem) => {
				return (
					<li className="list-item" key={listItem.id} id={listItem.id}>
						<div
							className={listItem.checked ? "cross-item" : ""}
							onClick={(e) =>
								handleCheck(
									e,
									listItem.id,
									listItem.item,
									listItem.checked,
									listItem.edit
								)
							}
						>
							{listItem.item}
						</div>
						<button onClick={() => deleteItem(listItem.id)}>X</button>
						{listItem.needEdit ? (
							<button onClick={(e) => addChangeBox(e, listItem.id)}>
								OOPS!
							</button>
						) : (
							""
						)}
						{listItem.edit ? (
							<form onSubmit={(e) => editTodo(e, listItem.id)}>
								<input
									type="text"
									placeholder="Edit To-Do!"
									onChange={captureEditInput}
								/>
							</form>
						) : (
							""
						)}
					</li>
				);
			})}
		</ul>
	);
};

export default List;
