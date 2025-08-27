import React from "react";
import { Card } from "react-bootstrap";
import { Notify } from "components/Alerts/Alert";
import { Button } from "@material-ui/core";
import BtnIcon from "components/Buttons/BtnIcon";
import EmptyAdd from "components/EmptyAdd/EmptyAdd";

const GetPaid = () => {
	return (
		<>
			{/* Title */}
			<h3 className="title-primary d-none d-md-block">Get Paid</h3>

			{/* Balance */}
			<Card body className="mb-3">
				<Card.Title className="row g-0 justify-content-between align-items-center">Balance</Card.Title>
				<hr />
				<Notify icon={<i className="fas fa-dollar-sign"></i>}>
					<Notify.Body>
						<h6>Your Balance</h6>
						<strong className="text-primary">$0.00</strong>
					</Notify.Body>
					<Notify.Action>
						<Button variant="contained" color="primary" disableElevation disabled>
							Get Paid Now
						</Button>
					</Notify.Action>
				</Notify>
			</Card>

			{/* Payment Details */}
			<Card body>
				<Card.Title className="row g-0 justify-content-between align-items-center">
					Payment Details
					<BtnIcon iconType="add" />
				</Card.Title>
				<hr />

				{/* Content */}
				<EmptyAdd
					icon={<i className="fas fa-credit-card"></i>}
					description={
						<>
							<p>
								<strong>You have not set up any payment methods yet.</strong>
							</p>
							<small>
								<i className="fas fa-info-circle me-2"></i>Tell us how you want to receive your funds. It may take up to 3 days to activate your payment method.
							</small>
						</>
					}
					btnName="Add a Payment Method"
				/>
			</Card>
		</>
	);
};

export default GetPaid;
