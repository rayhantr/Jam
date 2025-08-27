import React from "react";
import { Button } from "@material-ui/core";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeaderSection = () => {
	// modal field forms
	const renderFormFields = (
		<Form>
			<Form.Group as={Row} className="mb-3" controlId="highlightTitle">
				<Form.Label column md={3} className="text-md-end">
					Highlight Title
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="Highlight Title" className="py-2 px-3" />
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
			<Form.Group as={Row} className="mb-3" controlId="showGetStartButton">
				<Form.Label column md={3} className="text-md-end">
					Show Get Start Button
				</Form.Label>
				<Col md={8}>
					<Form.Select aria-label="Show Get Start Button" className="py-2 px-3">
						<option value="show">Show</option>
						<option value="hide">Hide</option>
					</Form.Select>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="youtubeVideoLink">
				<Form.Label column md={3} className="text-md-end">
					Youtube Video Link
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="https://youtu.be/example" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="heroImage">
				<Form.Label column md={3} className="text-md-end">
					Hero Image
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
					<h1 className="me-3">Header Section</h1>

					<div className="section-header-breadcrumb">
						<div className="breadcrumb-item active">
							<Link to="#">Admin</Link>
						</div>
						<div className="breadcrumb-item">HeaderSection</div>
					</div>
				</div>
			</section>
			<Row>
				<Col xs={12}>
					<div className="card">
						<div className="card-header">
							<h4>Edit Header Section</h4>
						</div>
						<div className="card-body pt-0">{renderFormFields}</div>
					</div>
				</Col>
			</Row>
		</>
	);
};

export default HeaderSection;
