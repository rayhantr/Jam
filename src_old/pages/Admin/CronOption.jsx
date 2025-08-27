import React from "react";
import { Button } from "@material-ui/core";
import { Card, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CronOption = () => {
	// modal field forms
	const renderFormFields = (
		<Form as={Row} className="g-3">
			<Col xs={12}>
				<Form.Label>Make alert to customer about "The subscription will be ending soon!"</Form.Label>
				<Form.Control type="text" placeholder="Make alert to customer about 'The subscription will be ending soon!'" className="py-2 px-3" />
			</Col>
			<Col xs={12}>
				<Form.Label>Assign Default Plan</Form.Label>
				<Form.Select aria-label="Assign Default Plan" className="py-2 px-3">
					<option value="on">On</option>
					<option value="of">Off</option>
				</Form.Select>
			</Col>
			<Col xs={12}>
				<Form.Label>Alert Message</Form.Label>
				<Form.Control as="textarea" rows={4} placeholder="Alert Message" className="py-2 px-3" />
			</Col>
			<Col xs={12}>
				<Form.Label>Expire Message</Form.Label>
				<Form.Control as="textarea" rows={4} placeholder="Expire Message" className="py-2 px-3" />
			</Col>
			<Col xs={12}>
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
					<h1 className="me-3">Cron Option</h1>

					<div className="section-header-breadcrumb">
						<div className="breadcrumb-item active">
							<Link to="#">Admin</Link>
						</div>
						<div className="breadcrumb-item">CronOption</div>
					</div>
				</div>
			</section>
			<Row className="g-3">
				<Col xs={12}>
					<Card>
						<Card.Header>
							<h4>Cron Jobs Settings</h4>
						</Card.Header>
						<Card.Body className="pt-0">{renderFormFields}</Card.Body>
					</Card>
				</Col>
				<Col xs={12}>
					<Card>
						<Card.Header>
							<h4>
								<i className="fas fa-circle me-2"></i>Make Expired Membership
							</h4>
							<em className="text-danger">Once/day</em>
						</Card.Header>
						<Card.Body className="pt-0 px-4 pb-4">curl -s https://testserver.jamtalent.net/cron/alert-user/after/order/expired</Card.Body>
					</Card>
				</Col>
				<Col xs={12}>
					<Card>
						<Card.Header>
							<h4>
								<i className="fas fa-circle me-2"></i>Make Alert To The Customer Before Expired The Membership
							</h4>
							<em className="text-danger">Once/day</em>
						</Card.Header>
						<Card.Body className="pt-0 px-4 pb-4">curl -s https://testserver.jamtalent.net/cron/alert-user/before/order/expired</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default CronOption;
