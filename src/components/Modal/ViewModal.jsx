import React from "react";
import { Modal } from "react-bootstrap";

const ViewModal = (props) => {
	return (
		<Modal {...props} centered>
			<Modal.Header closeButton>
				<Modal.Title>{props.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{props.content}</Modal.Body>
		</Modal>
	);
};

export default ViewModal;
