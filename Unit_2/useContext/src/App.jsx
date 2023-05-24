import "./reset.css";
import "./App.css";
import Header from "./components/Header";
import { StateProvider } from "./StateManager/StateManager";

function App() {
	return (
		<StateProvider>
				<Header></Header>
		</StateProvider>
	);
}

export default App;
