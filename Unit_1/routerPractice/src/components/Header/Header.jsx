import { Link } from "react-router-dom"
import "./Header.css"

const Header = (props) => {
  return (
    <div className="header">
      <nav className="nav">
				<Link className="link" to="/">
					Home
				</Link>
			</nav>
      <h1 className="title">{props.title}</h1>
      <nav className="nav">
				<Link className="link" to="/profile">
					Profile
				</Link>
			</nav>
    </div>
  )
}

export default Header