import React, { useState } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import BtnIcon from "components/Buttons/BtnIcon";
import ModalForm from "components/Modal/ModalForm";
import ChipGroup from "components/Chip/ChipGroup";

const Skills = ({ skills, publicView }) => {
	// Modal Control
	const [modalProps, setModalProps] = useState({ open: false, action: "" });

	const handleClose = () => setModalProps({ open: false });
	const editHandleShow = () => {
		setModalProps({ open: true, action: "Edit" });
	};

	// modal field forms
	const renderFormFields = (
		<Row className="align-items-end">
			<Col xs={12}>
				<Form.Group controlId="skills">
					<Form.Label>Your Skills</Form.Label>
					<Form.Control type="text" name="skills" />
				</Form.Group>
			</Col>
		</Row>
	);

	return (
		<>
			<Card body className="bs-dim">
				<Card.Title className="row g-0 justify-content-between align-items-center">Skills{publicView ? null : <BtnIcon iconType="edit" onClick={editHandleShow} />}</Card.Title>
				<ChipGroup itemList={skills} />
			</Card>
			{/* Modal */}
			<ModalForm show={modalProps.open} onHide={handleClose} action={modalProps.action} title="Skills">
				{renderFormFields}
			</ModalForm>
		</>
	);
};

export default Skills;
