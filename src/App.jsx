import React from "react";
import pdas from "./pdas.js";
import ProfileCard from "./components/ProfileCard";

function App() {

	return (
		<div>
			<h1>Personal Digital Assistants</h1>
			{pdas.map((pda) => {
				return (
					<ProfileCard
						imgUrl={pda.imgUrl}
						name={pda.name}
						handle={pda.handle}
						bio={pda.bio}
					/>
				);
			})}
		</div>
	);
}

export default App;
