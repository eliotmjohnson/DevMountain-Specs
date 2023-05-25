import "./reset.css";
import "./App.css";
import { StateProvider } from "./store/StateManager";
import Header from "./components/Header/Header";
import InputForm from "./components/InputForm/InputForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
	return (
		<StateProvider>
			<Header />
			<InputForm />
			<TodoList />
		</StateProvider>
	);
}

export default App;
