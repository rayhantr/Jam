import React from "react";
import { Card } from "react-bootstrap";
import BtnIcon from "../../Buttons/BtnIcon";

const AvailableHours = ({ activeUser, publicView }) => {
	return (
		<Card body className="bs-dim">
			<Card.Title className="row g-0 justify-content-between align-items-center">
				Hours
				{publicView ? null : <BtnIcon iconType="edit" />}
			</Card.Title>
			<Card.Text>
				<strong>Available:</strong> More than {activeUser.availableHours}hrs/week
			</Card.Text>
		</Card>
	);
};

export default AvailableHours;
