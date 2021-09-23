import React, { useState } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import BtnIcon from "components/Buttons/BtnIcon";
import ModalForm from "components/Modal/ModalForm";

const AvailableHours = ({ activeUser, publicView }) => {
	const [modalProps, setModalProps] = useState({ open: false, action: "" });

	const handleClose = () => setModalProps({ open: false });
	// const addHandleShow = () => {
	// 	setModalProps({ open: true, action: "Add" });
	// };
	const editHandleShow = () => {
		setModalProps({ open: true, action: "Edit" });
	};

	// modal field forms
	const renderFormFields = (
		<Row className="align-items-end">
			<Col xs={12}>
				<Form.Group controlId="availableHours">
					<Form.Label>Your available hours in a week</Form.Label>
					<Form.Control type="text" name="availableHours" />
				</Form.Group>
			</Col>
		</Row>
	);

	return (
		<>
			<Card body className="bs-dim">
				<Card.Title className="row g-0 justify-content-between align-items-center">
					Hours
					{publicView ? null : <BtnIcon iconType="edit" onClick={editHandleShow} />}
				</Card.Title>
				<Card.Text>
					<strong>Available:</strong> More than {activeUser.availableHours}hrs/week
				</Card.Text>
			</Card>
			{/* Modal */}
			<ModalForm show={modalProps.open} onHide={handleClose} action={modalProps.action} title="Available Hours">
				{renderFormFields}
			</ModalForm>
		</>
	);
};

export default AvailableHours;
