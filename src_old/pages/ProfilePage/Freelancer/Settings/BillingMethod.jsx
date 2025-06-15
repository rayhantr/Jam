import React from "react";
import { Card } from "react-bootstrap";
import BtnIcon from "components/Buttons/BtnIcon";
import EmptyAdd from "components/EmptyAdd/EmptyAdd";

const BillingMethod = () => {
	return (
		<>
			{/* Title */}
			<h3 className="title-primary d-none d-md-block">Billing Method</h3>

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

export default BillingMethod;
