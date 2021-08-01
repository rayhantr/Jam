import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ProfileUser = () => {
	return (
		<Container>
			<Row>
				<Card>
					<Card.Header as="h4" className="row g-0 justify-content-between">
						Step Three
						<Col xs={1} className="text-center">
							<i className="fas fa-pen"></i>
						</Col>
					</Card.Header>

					<Card.Body className="bs-dim">
						<Card.Text>Profile </Card.Text>
					</Card.Body>
				</Card>
			</Row>
			<Row>Part</Row>
			<Row>Part</Row>
		</Container>
	);
};

export default ProfileUser;
