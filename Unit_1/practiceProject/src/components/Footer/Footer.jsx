import "./Footer.css";
import { useInView } from "react-hook-inview";

const Footer = () => {
    const [ref, isVisible] = useInView({ threshold: .7 });
    
    let classes;

    if (isVisible) {
        classes = "before hello-world"
    } else
        classes = "before"
    
	return (
		<footer ref={ref} className="footer">
			<h1 style={{fontSize: "2rem"}} className={classes}>Isn't that cool?!?!</h1>
		</footer>
	);
};

export default Footer;
