import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Avatar } from "@material-ui/core";

const UserInfo = ({ activeUser }) => {
	return (
		<Card>
			<Card.Body className="bs-dim row g-0 justify-content-between">
				<Col>
					<Row className="align-items-center">
						<Col xs="auto">
							<Avatar alt={activeUser.userName} src={activeUser.profileImg}></Avatar>
						</Col>
						<Col>
							<strong>{activeUser.userName}</strong>
							<br />
							<em>{activeUser.address}</em>
						</Col>
					</Row>
				</Col>
			</Card.Body>
		</Card>
	);
};

export default UserInfo;
