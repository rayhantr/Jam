import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalForm from "components/Modal/ModalForm";
import TablePaymentGateway from "components/Admin/Tables/TablePaymentGateway";

const PaymentGateway = () => {
	const [modalProps, setModalProps] = useState({ addOpen: false, editOpen: false, deleteOpen: false });

	const handleClose = () => setModalProps({ addOpen: false, editOpen: false, deleteOpen: false });
	const addHandleShow = () => {
		setModalProps({ addOpen: true });
	};
	const editHandleShow = () => {
		setModalProps({ editOpen: true });
	};

	// modal field forms
	const renderFormFields = (
		<Form as={Row} className="g-3">
			<Col lg={6}>
				<Form.Label>Name</Form.Label>
				<Form.Control type="text" placeholder="Name" className="py-2 px-3" />
			</Col>
			<Col lg={6}>
				<Form.Label>Logo</Form.Label>
				<Form.Control type="file" className="py-2 px-3" />
			</Col>
			<Col lg={6}>
				<Form.Label>Status</Form.Label>
				<Form.Select aria-label="Status" className="py-2 px-3">
					<option value="active">Active</option>
					<option value="inactive">Inactive</option>
				</Form.Select>
			</Col>
			<Col lg={6}>
				<Form.Label>Phone Status</Form.Label>
				<Form.Select aria-label="Status" className="py-2 px-3">
					<option value="active">Active</option>
					<option value="inactive">Inactive</option>
				</Form.Select>
			</Col>
			<Col lg={6}>
				<Form.Label>Namespace</Form.Label>
				<Form.Control type="text" placeholder="Namespace" className="py-2 px-3" />
			</Col>
			<Col lg={6}>
				<Form.Label>Rate</Form.Label>
				<Form.Control type="number" placeholder="Rate" className="py-2 px-3" />
			</Col>
			<Col lg={6}>
				<Form.Label>Charge</Form.Label>
				<Form.Control type="number" placeholder="Charge" className="py-2 px-3" />
			</Col>
			<Col lg={6}>
				<Form.Label>Currency</Form.Label>
				<Form.Control type="text" placeholder="Currency" className="py-2 px-3" />
			</Col>
			<Col lg={6}>
				<Form.Label>User Secret key</Form.Label>
				<Form.Control type="text" placeholder="User Secret key" className="py-2 px-3" />
			</Col>
			<Col lg={6}>
				<Form.Label>Category Code</Form.Label>
				<Form.Control type="text" placeholder="Category Code" className="py-2 px-3" />
			</Col>
		</Form>
	);

	// Rendered content
	return (
		<>
			<section className="section">
				<div className="section-header">
					<h1 className="me-3">Payment Gateway</h1>
					<Button variant="contained" color="primary" disableElevation onClick={addHandleShow}>
						Add New
					</Button>
					<div className="section-header-breadcrumb">
						<div className="breadcrumb-item active">
							<Link to="#">Admin</Link>
						</div>
						<div className="breadcrumb-item">PaymentGateway</div>
					</div>
				</div>
			</section>
			<Row>
				<Col xs={12}>
					<div className="card">
						<div className="card-body d-grid">
							<TablePaymentGateway onClick={editHandleShow} />
						</div>
					</div>
				</Col>
			</Row>
			{/* Modal */}
			<ModalForm show={modalProps.addOpen} onHide={handleClose} action="Add" size="xl" fullscreen="md-down" title="Add New Payment Gateway">
				{renderFormFields}
			</ModalForm>
			<ModalForm show={modalProps.editOpen} onHide={handleClose} action="Edit" size="xl" fullscreen="md-down" title="Edit Payment Gateway">
				{renderFormFields}
			</ModalForm>
		</>
	);
};

export default PaymentGateway;
