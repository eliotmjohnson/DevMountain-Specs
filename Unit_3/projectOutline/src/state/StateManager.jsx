import { createContext, useReducer, useContext, useRef } from "react";

export const State = createContext();

export const StateProvider = (props) => {
	const [state, dispatch] = useReducer(stateReducer, {});

	const ref = useRef();

	return (
		<State.Provider value={{ state, dispatch, refs: { ref } }}>
			{props.children}
		</State.Provider>
	);
};

export const useGlobalState = () => {
	return useContext(State);
};

export const stateReducer = (state, action) => {};
