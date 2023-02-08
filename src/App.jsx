import React from "react";
import ProfileCard from "./components/ProfileCard.jsx";

function App() {

	return (
		<div>
			<h1>Personal Digital Assistants</h1>
			<ProfileCard
                name="Alexa"
                handle="alexa23"
                bio="I'll help you place your next Amazon order!"
            />
		</div>
	);
}

export default App;
