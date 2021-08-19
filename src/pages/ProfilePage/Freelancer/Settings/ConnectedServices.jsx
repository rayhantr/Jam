import React from "react";
import { Card } from "react-bootstrap";
import { Notify } from "components/Alerts/Alert";
import { Button } from "@material-ui/core";

const ConnectedServices = () => {
	return (
		<>
			{/* Title */}
			<h3 className="title-primary d-none d-md-block">Connected Services</h3>

			{/* Google */}
			<Card body className="mb-3">
				<Card.Title className="row g-0 justify-content-between align-items-center">Sign in with Google</Card.Title>
				<hr />
				<Notify icon={<i className="fab fa-google"></i>}>
					<Notify.Body>
						<h6>
							<strong>Sign into JamTalent with 1-click</strong>
						</h6>
						<small className="text-gray-light">You are not signed in through Google</small>
					</Notify.Body>
					<Notify.Action>
						<Button variant="contained" color="primary" startIcon={<i className="fab fa-google"></i>} disableElevation>
							Sign in with Google
						</Button>
					</Notify.Action>
				</Notify>
			</Card>

			{/* Apple */}
			<Card body className="mb-3">
				<Card.Title className="row g-0 justify-content-between align-items-center">Sign in with Apple</Card.Title>
				<hr />
				<Notify icon={<i className="fab fa-apple"></i>}>
					<Notify.Body>
						<h6>
							<strong>Sign into JamTalent with 1-click</strong>
						</h6>
						<small className="text-gray-light">You are not signed in through Apple</small>
					</Notify.Body>
					<Notify.Action>
						<Button variant="contained" color="primary" startIcon={<i className="fab fa-apple"></i>} disableElevation>
							Sign in with Apple
						</Button>
					</Notify.Action>
				</Notify>
			</Card>
		</>
	);
};

export default ConnectedServices;
