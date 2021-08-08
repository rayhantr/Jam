import React, { useState } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import BtnIcon from "../../Buttons/BtnIcon";
import ModalForm from "../../Modal/ModalForm";

const FormFields = () => {
	return (
		<Row className="align-items-end">
			<Col xs={6}>
				<Form.Group controlId="languageName">
					<Form.Label>Language Name</Form.Label>
					<Form.Control type="text" name="languageName" />
				</Form.Group>
			</Col>
			<Col xs={6}>
				<Form.Select aria-label="Language-fluency">
					<option>Fluency</option>
					<option value="Native">Native</option>
					<option value="Fluent">Fluent</option>
				</Form.Select>
			</Col>
		</Row>
	);
};

const Languages = ({ languages, publicView }) => {
	// Modal Control
	const [modalProps, setModalProps] = useState({ open: false, action: "" });

	const handleClose = () => setModalProps({ open: false });
	const addHandleShow = () => {
		setModalProps({ open: true, action: "Add" });
	};
	const editHandleShow = () => {
		setModalProps({ open: true, action: "Edit" });
	};

	return (
		<>
			<Card body className="bs-dim">
				<Card.Title className="row g-0 justify-content-between align-items-center">
					Languages
					{publicView ? null : (
						<Col xs="auto">
							<BtnIcon iconType="add" onClick={addHandleShow} />
							<BtnIcon iconType="edit" className="ms-2" onClick={editHandleShow} />
						</Col>
					)}
				</Card.Title>
				{/* Show languages info */}
				{languages.map((language) => {
					return (
						<Card.Text key={language.languageName}>
							<strong>{language.languageName}:</strong> {language.proficiency}
						</Card.Text>
					);
				})}
			</Card>
			{/* Modal */}
			<ModalForm show={modalProps.open} onHide={handleClose} action={modalProps.action} title="Languages">
				<FormFields />
			</ModalForm>
		</>
	);
};

export default Languages;
