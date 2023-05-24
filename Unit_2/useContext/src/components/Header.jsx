import "./Header.css";
import { useGlobalState } from "../StateManager/StateManager";
import HeaderTitle from "./HeaderTitle";

const Header = () => {
	const state = useGlobalState();

	return (
		<div className="header">
			<div className={state.headerClasses}>
				<HeaderTitle></HeaderTitle>
			</div>
		</div>
	);
};

export default Header;
