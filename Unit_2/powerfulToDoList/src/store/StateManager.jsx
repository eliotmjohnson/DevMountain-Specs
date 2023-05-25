import { createContext, useReducer, useContext, useRef } from "react";

export const State = createContext();
export const Dispatch = createContext();

export const StateProvider = (props) => {
	const [state, dispatch] = useReducer(stateReducer, {
		list: [],
		completedList: [],
	});

	const ref = useRef();

	return (
		<State.Provider value={{ state, refs: { ref } }}>
			<Dispatch.Provider value={dispatch}>{props.children}</Dispatch.Provider>
		</State.Provider>
	);
};

export const useGlobalState = () => {
	return useContext(State);
};

export const useGlobalDispatch = () => {
	return useContext(Dispatch);
};

export const stateReducer = (state, action) => {
	if (action.type === "added todo") {
		return {
			...state,
			list: [
				...state.list,
				{ todo: action.todo, edit: action.edit, menu: action.menu },
			],
		};
	} else if (action.type === "edit clicked") {
		return {
			...state,
			list: state.list.map((item, index) => {
				if (index === action.id) {
					return { ...item, edit: !item.edit };
				} else return item;
			}),
		};
	} else if (action.type === "todo edited") {
		return {
			...state,
			list: state.list.map((item, index) => {
				if (index === action.id) {
					return { ...item, edit: false, todo: action.todo };
				} else return item;
			}),
		};
	} else if (action.type === "delete clicked") {
		return {
			...state,
			list: state.list.filter((item, index) => {
				if (index !== action.id) {
					return item;
				}
			}),
		};
	} else if (action.type === "completed todo") {
		const filteredItem = state.list.filter((item, index) => {
			if (index === action.id) {
				return item;
			}
		});
		return {
			...state,
			list: state.list.filter((item, index) => {
				if (index !== action.id) {
					return item;
				}
			}),
			completedList: [
				...state.completedList,
				{ ...filteredItem[0], menu: false },
			],
		};
	} else if (action.type === "completed deleted") {
		return {
			...state,
			completedList: state.completedList.filter((item, index) => {
				if (index !== action.id) {
					return item;
				}
			}),
		};
	} else if (action.type === "menu clicked") {
		return {
			...state,
			list: state.list.map((item, index) => {
				if (index === action.id) {
					return { ...item, menu: !item.menu };
				} else return item;
			}),
		};
	} else if (action.type === "completed menu clicked") {
		return {
			...state,
			completedList: state.completedList.map((item, index) => {
				if (index === action.id) {
					return { ...item, menu: !item.menu };
				} else return item;
			}),
		};
	}
};
