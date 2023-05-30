import "./Profile.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { alex, eliot, shan } from "../../assets/images/headshots/Headshots";
import Header from "../../components/Header/Header";
import Wrapper from "../../components/ProfileInfo/Wrapper";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";

const Profile = () => {
	const [user, setUser] = useState(0);
	const navigate = useNavigate();
	const params = useParams();

	const users = [
		{
			id: "C91F82BJ76YO7MV5S4VXF751ECR7OS",
			name: "Eliot Johnson",
			headshot: eliot,
			age: "27",
			gender: "Male",
			hobbies: ["Drumming", "Coding", "Making Music"],
		},
		{
			id: "PXZAOPW3ZKU7LZVN9GGFI838T21DFH",
			name: "Alex Johnson",
			headshot: alex,
			age: "31",
			gender: "Male",
			hobbies: ["Playing Bass", "Coding", "Cooking"],
		},
		{
			id: "BT3YNACQADNU9I90IYXG4G69R9HCPN",
			name: "Shannon Johnson",
			headshot: shan,
			age: "28",
			gender: "Female",
			hobbies: [
				"Reading",
				"Listening to podcasts",
				"Yoga",
				"Walking",
				"Working out",
			],
		},
	];

	useEffect(() => {
		const index = users.findIndex((user) => user.id === params.profileId);
		setUser((prev) => {
			return index;
		});
	}, [params.profileId]);

	const nextUser = () => {
		if (user < users.length - 1) {
			navigate(`/profile/${users[user + 1].id}`);
		}
	};

	const prevUser = () => {
		if (user > 0) {
			navigate(`/profile/${users[user - 1].id}`);
		}
	};

	return (
		<main className="profile">
			<Header title="Profile" />
			<img className="headshot" src={users[user].headshot} />
			<Wrapper>
				<ProfileInfo
					name={users[user].name}
					age={users[user].age}
					gender={users[user].gender}
					hobbies={users[user].hobbies}
				/>
				<div>
					{user === 0 ? undefined : <button onClick={prevUser}>Previous User</button>}
					{user === users.length -1 ? undefined : <button onClick={nextUser}>Next User</button>}
				</div>
			</Wrapper>
		</main>
	);
};

export default Profile;
