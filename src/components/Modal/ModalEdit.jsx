import React from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";

const ModalEdit = (props) => {
	return (
		<Modal {...props} centered>
			<Modal.Header closeButton>
				<Modal.Title>{props.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Row className="align-items-end">
					<Col xs={6}>
						<Form.Group controlId="Language Name">
							<Form.Label>Language Name</Form.Label>
							<Form.Control type="text" name="Language Name" />
						</Form.Group>
					</Col>
					<Col xs={6}>
						<Form.Select aria-label="Language-fluency">
							<option>Fluency</option>
							<option value="1">Native</option>
							<option value="2">Writing</option>
							<option value="3">Speaking</option>
							<option value="4">Fluent</option>
						</Form.Select>
					</Col>
				</Row>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={props.onHide}>
					Close
				</Button>
				<Button variant="primary" onClick={props.onHide}>
					Add
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ModalEdit;
