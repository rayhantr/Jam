import React, { useState } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import EmptyAdd from "components/EmptyAdd/EmptyAdd";
import BtnIcon from "components/Buttons/BtnIcon";
import ModalForm from "components/Modal/ModalForm";

const Experiences = ({ otherExp }) => {
	return (
		<Col key={otherExp.id} xs={12}>
			<div className="exp-history">
				<div className="exp-details ps-3">
					<h6 className="exp-role">{otherExp.role}</h6>
					<p className="exp-about mt-3">{otherExp.about}</p>
				</div>
			</div>
		</Col>
	);
};

const OtherExp = ({ otherExpList, publicView }) => {
	const [modalProps, setModalProps] = useState({ open: false, action: "" });

	const handleClose = () => setModalProps({ open: false });
	const addHandleShow = () => {
		setModalProps({ open: true, action: "Add" });
	};
	// const editHandleShow = () => {
	// 	setModalProps({ open: true, action: "Edit" });
	// };

	const renderFormFields = (
		<Row className="align-items-end">
			<Col xs={12} className="mb-3">
				<Form.Group controlId="role">
					<Form.Label>Your Role</Form.Label>
					<Form.Control type="text" name="role" />
				</Form.Group>
			</Col>
			<Col xs={12}>
				<Form.Group controlId="about">
					<Form.Label>About the Experience</Form.Label>
					<Form.Control as="textarea" rows={4} name="about" />
				</Form.Group>
			</Col>
		</Row>
	);

	return (
		<>
			<Col xs={12} className="mt-3">
				<Card body className="bs-dim">
					<Card.Title className="row g-0 justify-content-between align-items-center">
						Other Experiences
						{publicView ? null : <BtnIcon iconType="add" onClick={addHandleShow} />}
					</Card.Title>
					<Row className="mt-3">
						{!otherExpList.length ? (
							<Col>
								<EmptyAdd description="Add any other experiences that help you stand out" btnName="Add other experiences" onClick={addHandleShow} />
							</Col>
						) : (
							<>
								{otherExpList.map((otherExp) => {
									return <Experiences key={otherExp.id} otherExp={otherExp} />;
								})}
							</>
						)}
					</Row>
				</Card>
			</Col>
			{/* Modal */}
			<ModalForm show={modalProps.open} onHide={handleClose} action={modalProps.action} title="Other Experiences">
				{renderFormFields}
			</ModalForm>
		</>
	);
};

export default OtherExp;
