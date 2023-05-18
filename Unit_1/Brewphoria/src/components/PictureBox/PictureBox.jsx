import { useInView } from "react-hook-inview";
import "./PictureBox.css";

const PictureBox = (props) => {
	const [ref, isVisible] = useInView({
		threshold: 0.6,
		unobserveOnEnter: true,
	});

	let classes = "before";

	if (isVisible) {
		classes = "before hello-world";
	}

	return (
		<div ref={ref} className="box">
			<img className={classes} src={props.url} />
		</div>
	);
};

export default PictureBox;
