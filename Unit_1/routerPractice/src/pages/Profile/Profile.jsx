import "./Profile.css";
import { useState } from "react";
import { alex, eliot, shan } from "../../assets/images/headshots/Headshots";
import Header from "../../components/Header/Header";
import Wrapper from "../../components/ProfileInfo/Wrapper";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";

const Profile = () => {
	const [user, setUser] = useState(0);

	const users = [
		{
			name: "Eliot Johnson",
			headshot: eliot,
			age: "27",
			gender: "Male",
			hobbies: ["Drumming", "Coding", "Making Music"],
		},
		{
			name: "Alex Johnson",
			headshot: alex,
			age: "31",
			gender: "Male",
			hobbies: ["Playing Bass", "Coding", "Cooking"],
		},
		{
			name: "Shannon Johnson",
			headshot: shan,
			age: "28",
			gender: "Female",
			hobbies: ["Reading", "Listening to podcasts", "Yoga", "Walking", "Working out"],
		},
	];

	const nextUser = () => {
		if (user < users.length - 1) {
			setUser((prev) => prev + 1);
		}
	};

	const prevUser = () => {
		if (user > 0) {
			setUser((prev) => prev - 1);
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
					<button onClick={prevUser}>Previous User</button>
					<button onClick={nextUser}>Next User</button>
				</div>
			</Wrapper>
		</main>
	);
};

export default Profile;
