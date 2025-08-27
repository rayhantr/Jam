import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Notify } from "components/Alerts/Alert";
import { Avatar, Button } from "@material-ui/core";
import BtnIcon from "components/Buttons/BtnIcon";

const MyProfile = () => {
	return (
		<>
			{/* Title */}
			<h3 className="title-primary d-none d-md-block">My Profile</h3>

			{/* Account */}
			<Card body className="mb-3">
				<Card.Title className="row g-0 justify-content-between align-items-center">
					Account
					<BtnIcon />
				</Card.Title>
				<hr />

				{/* Content */}
				<Row className="g-3 justify-content-center">
					<Col xs={12} md="auto">
						<Row className="g-0 justify-content-center align-items-center h-100">
							<Notify className="w-auto">
								<Notify.Body>
									<Row className="g-0 justify-content-center">
										<Avatar variant="rounded" alt="User Name" src="" className="xtra-large"></Avatar>
									</Row>
								</Notify.Body>
							</Notify>
						</Row>
					</Col>
					<Col>
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
					</Col>
				</Row>
			</Card>

			{/* Account action */}
			<Card body className="mb-3">
				<Card.Title className="row g-0 justify-content-between align-items-center">Account Action</Card.Title>
				<hr />

				{/* Content */}
				<Notify icon={<i className="fas fa-times-circle"></i>}>
					<Notify.Body>
						<h6>Close account</h6>
						<small className="text-gray-light">Your account will stay closed until next time you log in.</small>
					</Notify.Body>
					<Notify.Action>
						<Button variant="contained" color="primary" disableElevation>
							Close account
						</Button>
					</Notify.Action>
				</Notify>
			</Card>
		</>
	);
};

export default MyProfile;
