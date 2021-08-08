import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Panel1 from "./Panel1";
import Panel2 from "./Panel2";

const FreelancerFeed = () => {
	return (
		<Container className="my-3 my-md-5">
			<Row className="g-3">
				<Col xs={12} md={3}>
					<Panel1 />
				</Col>
				<Col xs={12} md={9}>
					<Panel2 />
				</Col>
			</Row>
		</Container>
	);
};

export default FreelancerFeed;