import "./reset.css";
import "./App.css";
import Button from "./components/Button/Button";
import InfoForm from "./components/InfoForm/InfoForm";

function App() {
	return (
		<>
			<InfoForm>
				<Button variant="default">Submit</Button>
			</InfoForm>
		</>
	);
}

export default App;
