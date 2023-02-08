import React from "react";

const ProfileCard = ({imgUrl, name, handle, bio}) => {
	return (
		<div>
			<img src={imgUrl} alt={name}/>
			<div>
				<h3>{name}</h3>
				<h4>{handle}</h4>
				<p>{bio}</p>
			</div>
		</div>
	)
}

export default ProfileCard;