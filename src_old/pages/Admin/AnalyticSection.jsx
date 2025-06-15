import React from "react";
import { Button } from "@material-ui/core";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AnalyticSection = () => {
	// modal field forms
	const renderFormFields = (
		<Form>
			<Form.Group as={Row} className="mb-3" controlId="title">
				<Form.Label column md={3} className="text-md-end">
					Title
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="Title" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="shortTitle">
				<Form.Label column md={3} className="text-md-end">
					Short Title
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="Short Title" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="image">
				<Form.Label column md={3} className="text-md-end">
					Image
				</Form.Label>
				<Col md={8}>
					<Form.Control type="file" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="shortDescription">
				<Form.Label column md={3} className="text-md-end">
					Short Description
				</Form.Label>
				<Col md={8}>
					<Form.Control as="textarea" rows={5} placeholder="Short Description" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="pageContent">
				<Form.Label column md={3} className="text-md-end">
					Page Content
				</Form.Label>
				<Col md={8}>
					<Form.Control as="textarea" rows={5} placeholder="Page Content" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="showGetStartButton">
				<Form.Label column md={3} className="text-md-end">
					Status
				</Form.Label>
				<Col md={8}>
					<Form.Select aria-label="Status" className="py-2 px-3">
						<option value="active">Active</option>
						<option value="inactive">Inactive</option>
					</Form.Select>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="buttonText">
				<Form.Label column md={3} className="text-md-end">
					Button Text
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="Button Text" className="py-2 px-3" />
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
					<h1 className="me-3">Analytic Section</h1>

					<div className="section-header-breadcrumb">
						<div className="breadcrumb-item active">
							<Link to="#">Admin</Link>
						</div>
						<div className="breadcrumb-item">AnalyticSection</div>
					</div>
				</div>
			</section>
			<Row>
				<Col xs={12}>
					<div className="card">
						<div className="card-header">
							<h4>Edit Analytic Section</h4>
						</div>
						<div className="card-body pt-0">{renderFormFields}</div>
					</div>
				</Col>
			</Row>
		</>
	);
};

export default AnalyticSection;
