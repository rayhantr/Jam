import React from "react";
import { Col, Card } from "react-bootstrap";
import BtnIcon from "../../Buttons/BtnIcon";

const ViewProfile = ({ publicView }) => {
	return (
		<Card body className="bs-dim">
			<Card.Title className="row g-0 justify-content-between align-items-center">
				View Profile
				{publicView ? null : (
					<Col xs="auto">
						<BtnIcon iconType="add" />
						<BtnIcon iconType="edit" className="ms-2" />
					</Col>
				)}
			</Card.Title>
			<Card.Text>CMS Development</Card.Text>
			<Card.Text>All work</Card.Text>
		</Card>
	);
};

export default ViewProfile;
