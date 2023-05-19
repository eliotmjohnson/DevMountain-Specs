import "./assets/reset.css";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import List from "./components/List/List";
import CheckedList from "./components/List/CheckedList";

function App() {
	const [newList, setNewList] = useState([]);
	const [checkedList, setCheckedList] = useState([]);

	const sendList = (listItem) => {
		setNewList((prev) => {
			return [listItem, ...prev];
		});
	};

	return (
		<>
			<Header></Header>
			<Input sendList={sendList}></Input>
			<List
				newList={newList}
				setNewList={setNewList}
				setCheckedList={setCheckedList}
			></List>
			<CheckedList
				checkedList={checkedList}
				setNewList={setCheckedList}
				setCheckedList={setNewList}
			></CheckedList>
		</>
	);
}

export default App;
