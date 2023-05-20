import "./ProfileInfo.css";

const ProfileInfo = (props) => {
	return (
		<section className="profile-info">
			<h1 className="name">{props.name}</h1>
			<aside className="sub-info">
				<h2>{props.gender}</h2>
				<h3>{props.age}</h3>
			</aside>
			<ul className="hobbies">
				<h2>Hobbies</h2>
				{props.hobbies.map((hobby) => {
					return <li>{hobby}</li>;
				})}
			</ul>
		</section>
	);
};

export default ProfileInfo;
