import React, { useState } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import BtnIcon from "components/Buttons/BtnIcon";
import ModalForm from "components/Modal/ModalForm";
import EmptyAdd from "components/EmptyAdd/EmptyAdd";

const Certificate = ({ certificates }) => {
	return (
		<Row>
			<Col xs={3} sm={3} lg={2} className="text-center">
				<div className="certificate-icon px-0 px-sm-1 px-md-3">
					<img src="https://image.flaticon.com/icons/png/512/4650/4650045.png" alt="certificate" />
				</div>
			</Col>
			<Col>
				<h6 className="certificate-title">{certificates.title}</h6>
				<small className="certificate-from">{certificates.from}</small>
				<br />
				<small className="certificate-date">Issued - {certificates.issueDate}</small>
				<p className="certificate-details pt-3">{certificates.details}</p>
			</Col>
		</Row>
	);
};

const Certification = ({ certificationList, publicView }) => {
	const [modalProps, setModalProps] = useState({ open: false, action: "" });

	const handleClose = () => setModalProps({ open: false });
	const addHandleShow = () => {
		setModalProps({ open: true, action: "Add" });
	};
	// const editHandleShow = () => {
	// 	setModalProps({ open: true, action: "Edit" });
	// };

	// modal field forms
	const renderFormFields = (
		<Form>
			<Row className="align-items-end">
				<Col xs={12} className="mb-3">
					<Form.Group controlId="title">
						<Form.Label>Certificate Title</Form.Label>
						<Form.Control type="text" name="title" />
					</Form.Group>
				</Col>
				<Col xs={12} className="mb-3">
					<Form.Group controlId="from">
						<Form.Label>Certified From</Form.Label>
						<Form.Control type="text" name="from" />
					</Form.Group>
				</Col>
				<Col xs={12} className="mb-3">
					<Form.Group controlId="issueDate">
						<Form.Label>Issued Date</Form.Label>
						<Form.Control type="text" name="issueDate" />
					</Form.Group>
				</Col>
				<Col xs={12}>
					<Form.Group controlId="details">
						<Form.Label>About the Certificate</Form.Label>
						<Form.Control as="textarea" rows={4} name="details" />
					</Form.Group>
				</Col>
			</Row>
		</Form>
	);

	return (
		<>
			<Col xs={12} className="mt-3">
				<Card body className="bs-dim">
					<Card.Title className="row g-0 justify-content-between align-items-center">
						Certification
						{publicView ? null : <BtnIcon iconType="add" onClick={addHandleShow} />}
					</Card.Title>
					<Row className="mt-3">
						{!certificationList.length ? (
							<Col>
								<EmptyAdd description="Add certificate to highlight your best skills" btnName="Add certification" />
							</Col>
						) : (
							<>
								{certificationList.map((certificates) => {
									return (
										<Col key={certificates.id} xs={12} className="mb-4">
											<Certificate certificates={certificates} />
										</Col>
									);
								})}
							</>
						)}
					</Row>
				</Card>
			</Col>
			{/* Modal */}
			<ModalForm show={modalProps.open} onHide={handleClose} action={modalProps.action} title="Certification">
				{renderFormFields}
			</ModalForm>
		</>
	);
};

export default Certification;
