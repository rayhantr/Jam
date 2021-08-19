import React, { useState } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import BtnIcon from "components/Buttons/BtnIcon";
import ModalForm from "components/Modal/ModalForm";

const FormFields = () => {
	return (
		<Row className="align-items-end">
			<Col xs={12} className="mb-3">
				<Form.Group controlId="instituteName">
					<Form.Label>Institute Name</Form.Label>
					<Form.Control type="text" name="instituteName" />
				</Form.Group>
			</Col>
			<Col xs={12} className="mb-3">
				<Form.Group controlId="degree">
					<Form.Label>Degree</Form.Label>
					<Form.Control type="text" name="degree" />
				</Form.Group>
			</Col>
			<Col xs={12} className="mb-3">
				<Form.Group controlId="department">
					<Form.Label>Department</Form.Label>
					<Form.Control type="text" name="department" />
				</Form.Group>
			</Col>
			<Col xs={6}>
				<Form.Group controlId="startDate">
					<Form.Label>Start Date</Form.Label>
					<Form.Control type="text" name="startDate" />
				</Form.Group>
			</Col>
			<Col xs={6}>
				<Form.Group controlId="endDate">
					<Form.Label>End Date</Form.Label>
					<Form.Control type="text" name="endDate" />
				</Form.Group>
			</Col>
		</Row>
	);
};

const Education = ({ education, publicView }) => {
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
					Education
					{publicView ? null : <BtnIcon iconType="add" onClick={addHandleShow} />}
				</Card.Title>
				<Row className="g-0 justify-content-between">
					{/* Show education info */}
					{education.map((institute) => {
						return (
							<Col xs={12} key={institute.instituteName} className="mb-3">
								<Row>
									<Col>
										<h6>
											<strong>{institute.instituteName}</strong>
										</h6>
										<span>{institute.degree}</span> <br />
										<span>{institute.department}</span> <br />
										<span>
											<em>
												{institute.startDate}-{institute.endDate}
											</em>
										</span>
									</Col>
									{publicView ? null : (
										<Col xs="auto">
											<BtnIcon iconType="edit" onClick={editHandleShow} />
											<BtnIcon iconType="delete" className="ms-2" />
										</Col>
									)}
								</Row>
							</Col>
						);
					})}
				</Row>
			</Card>
			{/* Modal */}
			<ModalForm show={modalProps.open} onHide={handleClose} action={modalProps.action} title="Education">
				<FormFields />
			</ModalForm>
		</>
	);
};

export default Education;
