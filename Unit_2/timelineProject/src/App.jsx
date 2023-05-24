import "./reset.css";
import "./App.css";
import { useState } from "react";
import EventCard from "./components/EventCard/EventCard";
import Form from "./components/Form/Form";

function App() {
	const [events, setEvents] = useState([]);

	return (
		<>
			<div className="timeline">
				{events.map((event, i) => {
					return (
						<EventCard
							key={i}
							setEvents={setEvents}
							title={event.title}
							date={event.date}
							edit={event.edit}
						></EventCard>
					);
				})}
			</div>
			<Form buttonTitle="Add" setEvents={setEvents}></Form>
		</>
	);
}

export default App;
