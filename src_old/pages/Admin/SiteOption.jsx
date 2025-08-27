import React from "react";
import { Button } from "@material-ui/core";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SiteOption = () => {
	// modal field forms
	const renderFormFields = (
		<Form>
			<Form.Group as={Row} className="mb-3" controlId="autoOrderApprove">
				<Form.Label column md={3} className="text-md-end">
					Auto Order Approve
				</Form.Label>
				<Col md={8}>
					<Form.Select aria-label="Auto Order Approve" className="py-2 px-3">
						<option value="on">On</option>
						<option value="off">Off</option>
					</Form.Select>
					<Form.Text className="text-muted">Automatic Order Approved After Payment Success</Form.Text>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="currency">
				<Form.Label column md={3} className="text-md-end">
					Currency
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="Currency" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="currencyIcon">
				<Form.Label column md={3} className="text-md-end">
					Currency Icon
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="Currency Icon" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="tax">
				<Form.Label column md={3} className="text-md-end">
					Tax
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="Tax" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="invoicePrefix">
				<Form.Label column md={3} className="text-md-end">
					Invoice Prefix
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="Invoice Prefix" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="supportEmail">
				<Form.Label column md={3} className="text-md-end">
					Support Email
				</Form.Label>
				<Col md={8}>
					<Form.Control type="email" placeholder="example@email.com" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="darkLogo">
				<Form.Label column md={3} className="text-md-end">
					Dark Logo
				</Form.Label>
				<Col md={8}>
					<Form.Control type="file" className="py-2 px-3" />
				</Col>
			</Form.Group>
			{/* update button */}
			<Row>
				<Col xs={12} md={{ span: 9, offset: 3 }}>
					<Button variant="contained" color="primary" disableElevation>
						Update
					</Button>
				</Col>
			</Row>
		</Form>
	);

	// Rendered content
	return (
		<>
			<section className="section">
				<div className="section-header">
					<h1 className="me-3">Site Option</h1>

					<div className="section-header-breadcrumb">
						<div className="breadcrumb-item active">
							<Link to="#">Admin</Link>
						</div>
						<div className="breadcrumb-item">SiteOption</div>
					</div>
				</div>
			</section>
			<Row>
				<Col xs={12}>
					<div className="card">
						<div className="card-body">{renderFormFields}</div>
					</div>
				</Col>
			</Row>
		</>
	);
};

export default SiteOption;
