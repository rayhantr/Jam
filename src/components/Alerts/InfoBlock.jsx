import React from "react";
import { Col, Row } from "react-bootstrap";

const InfoBlock = (props) => {
	return (
		<Row className={`infoBlock bdr-light-primary g-0 align-items-center ${props.className || ""}`}>
			<div className="infoBlock-title w-auto px-3 py-2">{props.title}</div>
			<Col xs={12}>
				<Row className="g-0 p-3">{props.children}</Row>
			</Col>
		</Row>
	);
};

const Body = ({ children }) => <Col className="infBlock-body">{children}</Col>;
InfoBlock.Body = Body;

export default InfoBlock;
