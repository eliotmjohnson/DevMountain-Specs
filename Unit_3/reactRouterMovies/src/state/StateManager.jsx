import { createContext, useReducer, useContext, useRef } from "react";

export const State = createContext();

export const StateProvider = (props) => {
	const [state, dispatch] = useReducer(stateReducer, {movies: [], selectedMovie: []});

	const ref = useRef(new Map());

	return (
		<State.Provider value={{ state, dispatch, refs: { ref } }}>
			{props.children}
		</State.Provider>
	);
};

export const useGlobalState = () => {
	return useContext(State);
};

export const stateReducer = (state, action) => {
	if (action.type === "movies fetched") {
		return {...state, movies: action.data}
	} else if (action.type === "details clicked") {
		return { ...state, selectedMovie: { ...action.data } }
	}
};
