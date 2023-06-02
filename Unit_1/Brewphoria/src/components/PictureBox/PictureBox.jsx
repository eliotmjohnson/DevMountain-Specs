import "./PictureBox.css";
import { useInView } from "react-intersection-observer";

const PictureBox = (props) => {
	const [ref, inView] = useInView({
		threshold: 0.4,
		triggerOnce: true,
	});
	return (
		<div ref={ref} className="box">
			<img className={`picture ${inView ? "active" : ""}`} src={props.url} />
		</div>
	);
};

export default PictureBox;
