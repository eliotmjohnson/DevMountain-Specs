import { useInView } from "react-intersection-observer";
import starWars from "../assets/Star_Wars_Logo.svg.png"

const DivTest = () => {
    const { ref, inView, entry } = useInView({
		threshold: 1,
		triggerOnce: true,
    });
    
	return (
		<div ref={ref} className="test">
            {inView ? undefined : undefined}
		</div>
	);
};

export default DivTest;
