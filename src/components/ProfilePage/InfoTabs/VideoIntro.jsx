import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import BtnIcon from "../../Buttons/BtnIcon";
import EmptyAdd from "../EmptyAdd";

const VideoIntro = ({ videoIntro, publicView }) => {
	return (
		<Card body className="bs-dim">
			<Card.Title className="row g-0 justify-content-between align-items-center">
				Video Introduction
				{publicView ? null : <BtnIcon iconType="add" />}
			</Card.Title>
			<Row className="mt-3">
				{!videoIntro ? (
					<Col>
						<EmptyAdd icon={<i className="fas fa-file-video"></i>} description="Present yourself with a cool video including your works" btnName="Add video" />
					</Col>
				) : (
					<Col xs={12} className="mb-4">
						<video src="videoIntro"></video>
					</Col>
				)}
			</Row>
		</Card>
	);
};

export default VideoIntro;
