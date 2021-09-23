import React, { useState } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import BtnIcon from "components/Buttons/BtnIcon";
import ModalForm from "components/Modal/ModalForm";

const ProfileTitleView = ({ activeUser, publicView }) => {
	// Modal Control
	const [modalProps, setModalProps] = useState({ open: false, action: "" });

	const handleClose = () => setModalProps({ open: false });
	const editHandleShow = () => {
		setModalProps({ open: true, action: "Edit" });
	};

	// modal field forms
	const renderFormFields = (
		<Row className="align-items-end">
			<Col xs={12} className="mb-3">
				<Form.Group controlId="profileTitle">
					<Form.Label>Title</Form.Label>
					<Form.Control type="text" name="profileTitle" />
				</Form.Group>
			</Col>
			<Col xs={12} className="mb-3">
				<Form.Group controlId="hourlyRate">
					<Form.Label>Hourly Rate</Form.Label>
					<Form.Control type="text" name="hourlyRate" />
				</Form.Group>
			</Col>
			<Col xs={12}>
				<Form.Group controlId="profileOverview">
					<Form.Label>Overview</Form.Label>
					<Form.Control as="textarea" rows={4} name="profileOverview" />
				</Form.Group>
			</Col>
		</Row>
	);

	return (
		<>
			<Card body className="bs-dim">
				<Card.Title className="row g-0 justify-content-between align-items-center">
					{activeUser.profileTitle}
					{publicView ? null : <BtnIcon iconType="edit" onClick={editHandleShow} />}
				</Card.Title>
				<Card.Subtitle>${activeUser.hourlyRate}/hr</Card.Subtitle>
				<Card.Text className="mt-3">{activeUser.profileOverview}</Card.Text>
			</Card>
			{/* Modal */}
			<ModalForm show={modalProps.open} onHide={handleClose} action={modalProps.action} title="Title & Overview">
				{renderFormFields}
			</ModalForm>
		</>
	);
};

export default ProfileTitleView;
