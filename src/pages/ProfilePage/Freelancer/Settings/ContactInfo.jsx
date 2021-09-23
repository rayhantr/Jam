import React from "react";
import { Card } from "react-bootstrap";
import { Notify } from "components/Alerts/Alert";
import { Button } from "@material-ui/core";
import BtnIcon from "components/Buttons/BtnIcon";

const ContactInfo = () => {
	return (
		<>
			{/* Title */}
			<h3 className="title-primary d-none d-md-block">Contact Info</h3>

			{/* Account */}
			<Card body className="mb-3">
				<Card.Title className="row g-0 justify-content-between align-items-center">
					Account
					<BtnIcon />
				</Card.Title>
				<hr />

				{/* Content */}
				<Notify icon={<i className="fas fa-id-card"></i>} className="mb-3">
					<Notify.Body>
						<h6>User ID</h6>
						<p className="text-primary mb-0">userId</p>
					</Notify.Body>
				</Notify>

				<Notify icon={<i className="fas fa-user"></i>} className="mb-3">
					<Notify.Body>
						<h6>Name</h6>
						<p className="text-primary mb-0">User Name</p>
					</Notify.Body>
				</Notify>

				<Notify icon={<i className="fas fa-envelope"></i>}>
					<Notify.Body>
						<h6>Email</h6>
						<p className="text-primary mb-0">a*****yz@gmail.com</p>
					</Notify.Body>
				</Notify>
			</Card>

			{/* Additional Account */}
			<Card body className="mb-3">
				<Card.Title className="row g-0 justify-content-between align-items-center">Additional Accounts</Card.Title>
				<hr />

				{/* Content */}
				<Notify icon={<i className="fas fa-user-tie"></i>}>
					<Notify.Body>
						<h6>Client Account</h6>
						<small className="text-gray-light">Hire, manage and pay as a different company. Each client company has its own freelancers, payment methods and reports.</small>
					</Notify.Body>
					<Notify.Action>
						<Button variant="contained" color="primary" disableElevation>
							New Client Account
						</Button>
					</Notify.Action>
				</Notify>
			</Card>

			{/* Location */}
			<Card body>
				<Card.Title className="row g-0 justify-content-between align-items-center">
					Location
					<BtnIcon />
				</Card.Title>
				<hr />

				{/* Content */}
				<Notify icon={<i className="fas fa-globe-asia"></i>} className="mb-3">
					<Notify.Body>
						<h6>Time Zone</h6>
						<p className="text-primary mb-0">UTC+06:00 Almaty, Dhaka</p>
					</Notify.Body>
				</Notify>

				<Notify icon={<i className="fas fa-map-marker-alt"></i>} className="mb-3">
					<Notify.Body>
						<h6>Address</h6>
						<p className="text-primary mb-0">
							Madhabdi, Narsingdi
							<br />
							Narsingdi 1604 <br />
							Bangladesh
						</p>
					</Notify.Body>
				</Notify>

				<Notify icon={<i className="fas fa-mobile-alt"></i>}>
					<Notify.Body>
						<h6>Phone</h6>
						<p className="text-primary mb-0">+8801712345678</p>
					</Notify.Body>
				</Notify>
			</Card>
		</>
	);
};

export default ContactInfo;
