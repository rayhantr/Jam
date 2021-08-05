import React from "react";
import { Card } from "react-bootstrap";
import BtnIcon from "../../Buttons/BtnIcon";

const ProfileTitleView = ({ activeUser, publicView }) => {
	return (
		<Card body className="bs-dim">
			<Card.Title className="row g-0 justify-content-between align-items-center">
				{activeUser.profileTitle}
				{publicView ? null : <BtnIcon iconType="edit" />}
			</Card.Title>
			<Card.Subtitle>${activeUser.hourlyRate}/hr</Card.Subtitle>
			<Card.Text className="mt-3">{activeUser.profileOverview}</Card.Text>
		</Card>
	);
};

export default ProfileTitleView;
