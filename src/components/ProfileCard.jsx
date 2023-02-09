import React from "react";

const ProfileCard = ({imgUrl, name, handle, bio}) => {
	return (
		<div className="card card-compact w-72 md:w-1/3 bg-neutral shadow-xl hover:scale-105 transition-transform duration-500">
			<figure className="bg-white">
				<img className="w-48 m-auto py-10"  src={imgUrl} alt={name}/>
			</figure>
			<div className="card-body prose">
				<h3 className="card-title text-2xl md:text-3xl text-primary">{name}</h3>
				<h4 className="text-accent text-lg md:text-xl">{handle}</h4>
				<p className="w-fit text-base text-base-content">{bio}</p>
			</div>
		</div>
	)
}

export default ProfileCard;