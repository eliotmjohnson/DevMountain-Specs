import "./ResetButton.css"

const ResetButton = (props) => {
    const handleClick = () => {
		props.setSquares(["", "", "", "", "", "", "", "", ""]);
		props.setPlayer(true);
    };
    
	return (
		<button
            onClick={handleClick}
            className="reset-button"
		>
			Reset
		</button>
	);
};

export default ResetButton;