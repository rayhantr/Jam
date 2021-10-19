import { Button } from "@material-ui/core";
import TableOrders from "components/Admin/Tables/TableOrders";
import ModalForm from "components/Modal/ModalForm";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Orders = () => {
	const [modalOpen, setModalOpen] = useState(false);

	const handleClose = () => setModalOpen(false);
	const handleShow = () => setModalOpen(true);

	// modal field forms
	const renderFormFields = (
		<Form>
			<Form.Group as={Row} className="mb-3" controlId="email">
				<Form.Label column md={4} lg={3} className="text-md-end">
					Email
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="User Email" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="selectPlan">
				<Form.Label column md={4} lg={3} className="text-md-end">
					Select Plan
				</Form.Label>
				<Col md={8}>
					<Form.Select aria-label="Select Plan" className="py-2 px-3">
						<option value="basic">Basic</option>
						<option value="standard">Standard</option>
						<option value="pro">Pro</option>
						<option value="enterprise">Enterprise</option>
					</Form.Select>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="paymentMethod">
				<Form.Label column md={4} lg={3} className="text-md-end">
					Payment Method
				</Form.Label>
				<Col md={8}>
					<Form.Select aria-label="Payment Method" className="py-2 px-3">
						<option value="paypal">Paypal</option>
						<option value="stripe">Stripe</option>
					</Form.Select>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="paymentID">
				<Form.Label column md={4} lg={3} className="text-md-end">
					Payment ID
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="Payment ID" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} controlId="status">
				<Form.Label column md={4} lg={3} className="text-md-end">
					Status
				</Form.Label>
				<Col md={8}>
					<Form.Select aria-label="Status" className="py-2 px-3">
						<option value="active">Active</option>
						<option value="inactive">Inactive</option>
					</Form.Select>
				</Col>
			</Form.Group>
		</Form>
	);

	return (
		<>
			<section className="section">
				<div className="section-header">
					<h1 className="me-3">Orders List</h1>
					<Button variant="contained" color="primary" disableElevation onClick={handleShow}>
						Create Order
					</Button>
					<div className="section-header-breadcrumb">
						<div className="breadcrumb-item active">
							<Link to="#">Admin</Link>
						</div>
						<div className="breadcrumb-item">Orders</div>
					</div>
				</div>
			</section>
			<Row>
				<Col xs={12}>
					<TableOrders />
				</Col>
			</Row>
			{/* Modal */}
			<ModalForm show={modalOpen} onHide={handleClose} action="Create" size="lg" title="Create Plan">
				{renderFormFields}
			</ModalForm>
		</>
	);
};

export default Orders;
