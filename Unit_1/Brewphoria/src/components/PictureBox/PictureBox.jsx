import "./PictureBox.css";

const PictureBox = (props) => {
	return (
		<div className="box">
			<img src={props.url} />
		</div>
	);
};

export default PictureBox;
