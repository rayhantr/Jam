import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Notify } from "components/Alerts/Alert";
import { Button } from "@material-ui/core";
import BtnIcon from "components/Buttons/BtnIcon";
import BtnLink from "components/Buttons/BtnLink";

const ContactInfo = () => {
	return (
		<>
			{/* Title */}
			<h3 className="title-primary d-none d-md-block">Membership & Connects</h3>

			{/* Account */}
			<Card body className="mb-3">
				<Card.Title className="row g-0 justify-content-between align-items-center">
					Summary
					<BtnIcon />
				</Card.Title>
				<hr />

				{/* Content */}
				<Notify icon={<i className="fas fa-layer-group"></i>} className="mb-3">
					<Notify.Body>
						<h6>
							<strong>Current Plan</strong>
						</h6>
						<p className="text-primary mb-0">Freelancer Basic</p>
					</Notify.Body>
					<Notify.Action>
						<Button variant="contained" color="primary" disableElevation>
							View or Edit Membership Plan
						</Button>
					</Notify.Action>
				</Notify>

				<Notify icon={<i className="fas fa-network-wired"></i>} className="mb-3">
					<Notify.Body>
						<h6>
							<strong>Available Connects</strong>
						</h6>
						<p className="text-primary mb-0">100</p>
					</Notify.Body>
					<Notify.Action>
						<Row className="justify-content-center g-3">
							<Col xs={12} sm="auto">
								<Button variant="contained" color="primary" disableElevation>
									Buy Connects
								</Button>
							</Col>
							<Col xs={12} sm="auto">
								<Button variant="contained" color="secondary" disableElevation>
									View Connects History
								</Button>
							</Col>
						</Row>
					</Notify.Action>
				</Notify>

				<Notify icon={<i className="fas fa-people-arrows"></i>} className="mb-3">
					<Notify.Body>
						<h6>
							<strong>Membership Connects</strong>
						</h6>
						<p className="text-primary mb-0">10 per month</p>
						<small className="text-gray-light">Any unused Connects at the end of your billing cycle will roll over to the next month (up to 200)</small>
						<BtnLink>
							<small>Learn More</small>
						</BtnLink>
					</Notify.Body>
				</Notify>

				<Notify icon={<i className="fas fa-hand-holding-usd"></i>} className="mb-3">
					<Notify.Body>
						<h6>
							<strong>Membership Fee</strong>
						</h6>
						<p className="text-primary mb-0">Free</p>
					</Notify.Body>
				</Notify>

				<Notify icon={<i className="fas fa-calendar-week"></i>}>
					<Notify.Body>
						<h6>
							<strong>Current Billing Cycle</strong>
						</h6>
						<time className="text-primary mb-0">Jul 1, 2021 - Aug 1, 2021</time>
						<br />
						<BtnLink className="ps-0 mt-1">Learn More</BtnLink>
					</Notify.Body>
				</Notify>
			</Card>
		</>
	);
};

export default ContactInfo;
