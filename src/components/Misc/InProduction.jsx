import React from "react";
import working from "common/images/in_production.svg";
import { Col, Row } from "react-bootstrap";

const InProduction = () => {
	return (
		<Row className="g-0 justify-content-center align-items-center h-100 p-4">
			<Col xs={12} md={4} className="mt-auto">
				<img src={working} alt="In Production" className="mw-100 mb-3" />
			</Col>
			<Col xs={12} md={9} className="mb-auto mt-4">
				<h4 className="text-secondary text-center">This page is in production. Our wizards are brewing codes for it to appear soon.</h4>
			</Col>
		</Row>
	);
};

export default InProduction;
