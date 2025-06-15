import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import TblWeekReports from "components/User/Tables/TblWeekReports";

const TimeTracker = () => {
	const renderFormFields = (
		<Form as={Row} className="g-3">
			<Col md={4} xl={5} xxl={5}>
				<Form.Label>Project</Form.Label>
				<Form.Select aria-label="Select Project" className="py-2 px-3">
					<option>Select Project</option>
				</Form.Select>
			</Col>
			<Col md={4} xl={4} xxl={5}>
				<Form.Label>Tasks</Form.Label>
				<Form.Select aria-label="Select Tasks" className="py-2 px-3">
					<option>Select Tasks</option>
				</Form.Select>
			</Col>
			<Col className="align-self-end">
				<div className="border border-primary-light border-1 rounded-4 bg-primary-light text-center fw-600 text-secondary p-2">
					<time>00:00:00</time>
				</div>
			</Col>
			<Col xs="auto" className="align-self-end">
				<Button variant="outlined" color="primary" className="bg-primary text-white rounded-4 py-2" disableElevation>
					Start
				</Button>
			</Col>
		</Form>
	);

	// Rendered content
	return (
		<>
			<section className="section">
				<div className="section-header">
					<h1 className="me-3">TimeTracker</h1>
					<div className="section-header-breadcrumb">
						<div className="breadcrumb-item active">
							<Link to="#">User</Link>
						</div>
						<div className="breadcrumb-item">TimeTracker</div>
					</div>
				</div>
			</section>
			<Row className="g-3">
				<Col xs={12}>
					<div className="card">
						<div className="card-body">{renderFormFields}</div>
					</div>
				</Col>
				<Col xs={12}>
					<div className="card">
						<div className="card-header px-3 px-lg-4">
							<h4>This Week Reports</h4>
						</div>
						<div className="card-body pt-0 d-grid">
							<TblWeekReports />
						</div>
					</div>
				</Col>
			</Row>
		</>
	);
};

export default TimeTracker;
