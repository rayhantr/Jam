import React from "react";
import { Button } from "@material-ui/core";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SEOSettings = () => {
	// modal field forms
	const renderFormFields = (
		<Form as={Row} className="g-3">
			<Col lg={6}>
				<Form.Label>Site Title</Form.Label>
				<Form.Control type="text" placeholder="Site Title" className="py-2 px-3" />
			</Col>
			<Col lg={6}>
				<Form.Label>Twitter Title</Form.Label>
				<Form.Control type="text" placeholder="Twitter Title" className="py-2 px-3" />
			</Col>
			<Col lg={6}>
				<Form.Label>Canonical URL</Form.Label>
				<Form.Control type="number" placeholder="Canonical URL" className="py-2 px-3" />
			</Col>
			<Col lg={6}>
				<Form.Label>Tags</Form.Label>
				<Form.Control type="number" placeholder="Tags" className="py-2 px-3" />
			</Col>
			<Col xs={12}>
				<Form.Label>Site Description</Form.Label>
				<Form.Control as="textarea" rows={5} placeholder="Site Description" className="py-2 px-3" />
			</Col>
			<Col lg={6}>
				<Button variant="contained" color="primary" disableElevation>
					Update
				</Button>
			</Col>
		</Form>
	);

	// Rendered content
	return (
		<>
			<section className="section">
				<div className="section-header">
					<h1 className="me-3">SEO Information</h1>

					<div className="section-header-breadcrumb">
						<div className="breadcrumb-item active">
							<Link to="#">Admin</Link>
						</div>
						<div className="breadcrumb-item">SEO Settings</div>
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

export default SEOSettings;
