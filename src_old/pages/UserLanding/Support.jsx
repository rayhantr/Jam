import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalForm from "components/Modal/ModalForm";
import TblSupport from "components/User/Tables/TblSupport";

const Support = () => {
	const [modalProps, setModalProps] = useState({ addOpen: false });

	const handleClose = () => setModalProps({ addOpen: false });
	const addHandleShow = () => {
		setModalProps({ addOpen: true });
	};

	// modal field forms
	const renderFormFields = (
		<Form>
			<Form.Group as={Row} className="mb-3" controlId="title">
				<Form.Label column md={3} className="text-md-end">
					Title
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="Enter your Title" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="duration">
				<Form.Label column md={3} className="text-md-end">
					Comment
				</Form.Label>
				<Col md={8}>
					<Form.Control as="textarea" rows={5} placeholder="Message" className="py-2 px-3" />
				</Col>
			</Form.Group>
		</Form>
	);

	// Rendered content
	return (
		<>
			<section className="section">
				<div className="section-header">
					<h1 className="me-3">Support</h1>
					<Button variant="contained" color="primary" disableElevation onClick={addHandleShow}>
						Create Ticket
					</Button>
					<div className="section-header-breadcrumb">
						<div className="breadcrumb-item active">
							<Link to="#">Admin</Link>
						</div>
						<div className="breadcrumb-item">Support</div>
					</div>
				</div>
			</section>
			<Row>
				<Col xs={12}>
					<div className="card">
						<div className="card-header">
							<h4>Support History</h4>
						</div>
						<div className="card-body pt-0 d-grid">
							<TblSupport />
						</div>
					</div>
				</Col>
			</Row>
			{/* Modal */}
			<ModalForm show={modalProps.addOpen} onHide={handleClose} action="Create" size="xl" fullscreen="sm-down" title="Create a Support Ticket">
				{renderFormFields}
			</ModalForm>
		</>
	);
};

export default Support;
