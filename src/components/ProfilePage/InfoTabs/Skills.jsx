import React, { useState } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import BtnIcon from "../../Buttons/BtnIcon";
import { Chip } from "@material-ui/core";
import ModalForm from "../../Modal/ModalForm";

const FormFields = () => {
	return (
		<Row className="align-items-end">
			<Col xs={12}>
				<Form.Group controlId="skills">
					<Form.Label>Your Skills</Form.Label>
					<Form.Control type="text" name="skills" />
				</Form.Group>
			</Col>
		</Row>
	);
};

const Skills = ({ skills, publicView }) => {
	// Modal Control
	const [modalProps, setModalProps] = useState({ open: false, action: "" });

	const handleClose = () => setModalProps({ open: false });
	const editHandleShow = () => {
		setModalProps({ open: true, action: "Edit" });
	};

	return (
		<>
			<Card body className="bs-dim">
				<Card.Title className="row g-0 justify-content-between align-items-center">Skills{publicView ? null : <BtnIcon iconType="edit" onClick={editHandleShow} />}</Card.Title>
				<Card.Text as="h6">
					{skills.map((skill) => {
						return <Chip key={skill} className="me-2" label={skill}></Chip>;
					})}
				</Card.Text>
			</Card>
			{/* Modal */}
			<ModalForm show={modalProps.open} onHide={handleClose} action={modalProps.action} title="Skills">
				<FormFields />
			</ModalForm>
		</>
	);
};

export default Skills;
