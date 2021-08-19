import React from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { Button, Checkbox, FormControlLabel } from "@material-ui/core";
import InfoBlock from "components/Alerts/InfoBlock";

const TaxInfo = () => {
	return (
		<>
			{/* Title */}
			<h3 className="title-primary d-none d-md-block">Tax Information</h3>

			{/* Tax residence */}
			<Card body className="mb-3">
				<Card.Title className="row g-0 justify-content-between align-items-center">Tax Residence</Card.Title>
				<hr />

				<InfoBlock title={<h5 className="mb-0">This address will be displayed on invoices</h5>}>
					<InfoBlock.Body>
						{/* Checkboxes */}
						<Row className="g-3">
							<Form.Group as={Col} xs={12}>
								<FormControlLabel control={<Checkbox color="primary" name="checkedA" />} label="Use my existing location address" />
							</Form.Group>
							<Form.Group as={Col} xs={12} md={4}>
								<Form.Label>Country</Form.Label>
								<Form.Select aria-label="Notification Select">
									<option>Select</option>
									<option value="1">One</option>
									<option value="2">Two</option>
								</Form.Select>
							</Form.Group>
							<Form.Group as={Col} xs={12} md={4}>
								<Form.Label>City</Form.Label>
								<Form.Control type="text" />
							</Form.Group>
							<Form.Group as={Col} xs={12} md={4}>
								<Form.Label>Postal Code</Form.Label>
								<Form.Control type="text" />
							</Form.Group>
							<Form.Group as={Col} xs={12}>
								<Form.Label>Address</Form.Label>
								<Form.Control as="textarea" rows={3} />
							</Form.Group>
							<Col xs="auto">
								<Button variant="contained" color="primary" disableElevation>
									Save
								</Button>
							</Col>
							<Col xs="auto">
								<Button color="primary" disableElevation>
									Cancel
								</Button>
							</Col>
						</Row>
					</InfoBlock.Body>
				</InfoBlock>
			</Card>
		</>
	);
};

export default TaxInfo;
