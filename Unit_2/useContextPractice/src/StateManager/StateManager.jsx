import { createContext, useReducer, useContext, useRef } from "react";

export const State = createContext();
export const StateDispatch = createContext(null);

export const StateProvider = (props) => {
	const titleRef = useRef(null);
	const anotherRef = useRef(null);
	const [state, dispatch] = useReducer(stateReducer, "");

	return (
		<State.Provider value={{ state, refs: { titleRef, anotherRef } }}>
			<StateDispatch.Provider value={dispatch}>
				{props.children}
			</StateDispatch.Provider>
		</State.Provider>
	);
};

export const useGlobalState = () => {
	return useContext(State);
};

export const useGlobalStateDispatch = () => {
	return useContext(StateDispatch);
};

export const stateReducer = (state, action) => {
	if (action.type === "title clicked") {
		return {
			...state,
			titleClasses: state.titleClasses === "title-test" ? "" : "title-test",
			headerClasses:
				state.headerClasses === "reducer-test" ? "" : "reducer-test",
		};
	} else if (action.type === "input changed") {
		return {
			...state,
			inputValue: action.value,
		};
	} else {
		throw Error("Unknown Action") && console.log(state);
	}
};
