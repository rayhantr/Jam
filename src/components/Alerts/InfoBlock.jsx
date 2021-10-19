import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";

const InfoBlock = (props) => {
	const CustomTag = props.tagType || "h6";
	return (
		<Row className={`infoBlock bdr-primary-light g-0 align-items-center ${props.className || ""}`}>
			<CustomTag className="infoBlock-title w-auto px-3 py-2 mb-0">{props.title}</CustomTag>
			{props.disableBody === false && (
				<Col xs={12}>
					<Row className="g-0 p-3">{props.children}</Row>
				</Col>
			)}
		</Row>
	);
};

const Body = ({ children }) => <Col className="infBlock-body">{children}</Col>;
InfoBlock.Body = Body;

InfoBlock.defaultProps = {
	disableBody: false,
};

InfoBlock.propTypes = {
	disableBody: PropTypes.bool,
};

export default InfoBlock;
