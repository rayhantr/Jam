import React, { useState } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import BtnIcon from "components/Buttons/BtnIcon";
import ModalForm from "components/Modal/ModalForm";
import EmptyAdd from "components/EmptyAdd/EmptyAdd";

const FormFields = () => {
	return (
		<Row className="align-items-end">
			<Col xs={12} className="mb-3">
				<Form.Group controlId="title">
					<Form.Label>Title</Form.Label>
					<Form.Control type="text" name="title" />
				</Form.Group>
			</Col>
			<Col xs={12}>
				<Form.Group controlId="overview">
					<Form.Label>Overview</Form.Label>
					<Form.Control as="textarea" rows={4} name="overview" />
				</Form.Group>
			</Col>
		</Row>
	);
};

const Testimonials = ({ testimonialList, publicView }) => {
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
		<Col xs={12} className="mt-3">
			<Card body className="bs-dim">
				<Card.Title className="row g-0 justify-content-between align-items-center">
					Testimonials
					{publicView ? null : <BtnIcon iconType="add" onClick={addHandleShow} />}
				</Card.Title>
				<Row className="mt-3">
					{!testimonialList.length ? (
						<Col>
							<EmptyAdd description="Showcase your skill with non-Jam client testimonials" btnName="Request a testimonial" onClick={addHandleShow} />
						</Col>
					) : (
						<>
							{testimonialList.map((testimonial) => {
								return (
									<Col key={testimonial.id} xs={12} className="mb-4">
										{testimonial.title}
									</Col>
								);
							})}
						</>
					)}
				</Row>
			</Card>
			{/* Modal */}
			<ModalForm show={modalProps.open} onHide={handleClose} action={modalProps.action} title="Testimonials">
				<FormFields />
			</ModalForm>
		</Col>
	);
};

export default Testimonials;
