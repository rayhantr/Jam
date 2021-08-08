import React, { useState } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import BtnIcon from "../../Buttons/BtnIcon";
import ModalForm from "../../Modal/ModalForm";
import EmptyAdd from "../EmptyAdd";

const FormFields = () => {
	return (
		<Row className="align-items-end">
			<Col xs={12} className="mb-3">
				<Form.Group controlId="videoIntro">
					<Form.Label>Add a video introduction</Form.Label>
					<Form.Control type="text" name="videoIntro" />
				</Form.Group>
			</Col>
		</Row>
	);
};

const VideoIntro = ({ videoIntro, publicView }) => {
	// Modal Control
	const [modalProps, setModalProps] = useState({ open: false, action: "" });

	const handleClose = () => setModalProps({ open: false });
	const addHandleShow = () => {
		setModalProps({ open: true, action: "Add" });
	};
	// const editHandleShow = () => {
	// 	setModalProps({ open: true, action: "Edit" });
	// };

	return (
		<>
			<Card body className="bs-dim">
				<Card.Title className="row g-0 justify-content-between align-items-center">
					Video Introduction
					{publicView ? null : <BtnIcon iconType="add" onClick={addHandleShow} />}
				</Card.Title>
				<Row className="mt-3">
					{!videoIntro ? (
						<Col>
							<EmptyAdd icon={<i className="fas fa-file-video"></i>} description="Present yourself with a cool video including your works" btnName="Add video" onClick={addHandleShow} />
						</Col>
					) : (
						<Col xs={12} className="mb-4">
							<video src="videoIntro"></video>
						</Col>
					)}
				</Row>
			</Card>
			{/* Modal */}
			<ModalForm show={modalProps.open} onHide={handleClose} action={modalProps.action} title="Video Introduction">
				<FormFields />
			</ModalForm>
		</>
	);
};

export default VideoIntro;
