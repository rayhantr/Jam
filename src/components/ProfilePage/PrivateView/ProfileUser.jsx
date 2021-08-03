import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import Avatar from "react-avatar";

import BtnIcon from "../../Buttons/BtnIcon";
import EmptyAdd from "../EmptyAdd";
import ModalEdit from "../../Modal/ModalEdit";

const ProfileP1 = () => {
	return (
		<Col xs={12} className="mt-3">
			<Card>
				<Card.Body className="bs-dim row g-0 justify-content-between align-items-center">
					<Col xs="auto">
						<Avatar name="User Name" round={true}></Avatar>
					</Col>
					<Col className="ps-4">
						<strong>User Name</strong>
						<br />
						<em>Location, Address</em>
					</Col>
					{/* Edit Buttons */}
					<Col xs={12} md="auto" className="mt-3 mt-md-0">
						<Row>
							<Col xs={12} sm={6} md={12} className="mb-3 mb-sm-0 mb-md-3">
								<Button variant="primary" className="col-12">
									See Public View
								</Button>
							</Col>
							<Col xs={12} sm={6} md={12}>
								<Button variant="secondary" className="col-12">
									Profile Settings
								</Button>
							</Col>
						</Row>
					</Col>
				</Card.Body>
			</Card>
		</Col>
	);
};

const ProfileP2 = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Col xs={12} md={4} className="mt-3">
			<Col className="mb-3">
				<Card body className="bs-dim">
					<Card.Title className="row g-0 justify-content-between align-items-center">
						View Profile
						<Col xs="auto">
							<BtnIcon iconType="add" />
							<BtnIcon iconType="edit" className="ms-2" />
						</Col>
					</Card.Title>
					<Card.Text>CMS Development</Card.Text>
					<Card.Text>All work</Card.Text>
				</Card>
			</Col>

			<Col className="mt-3">
				<Card body className="bs-dim">
					<Card.Title className="row g-0 justify-content-between align-items-center">
						Video Introduction
						<BtnIcon iconType="add" />
					</Card.Title>
					<Row className="mt-3">
						<Col>
							<EmptyAdd icon={<i className="fas fa-file-video"></i>} description="Present yourself with a cool video including your works" btnName="Add video" />
						</Col>
					</Row>
				</Card>
			</Col>

			<Col className="mt-3">
				<Card body className="bs-dim">
					<Card.Title className="row g-0 justify-content-between align-items-center">
						Hours
						<BtnIcon iconType="edit" />
					</Card.Title>
					<Card.Text>
						<strong>Available:</strong> More than 30hrs/week
					</Card.Text>
				</Card>
			</Col>

			<Col className="mt-3">
				<Card body className="bs-dim">
					<Card.Title className="row g-0 justify-content-between align-items-center">
						Languages
						<Col xs="auto">
							<BtnIcon iconType="add" onClick={handleShow} />
							<BtnIcon iconType="edit" className="ms-2" />
						</Col>
					</Card.Title>
					<Card.Text>
						<strong>English:</strong> Fluent
					</Card.Text>
				</Card>
			</Col>

			<Col className="mt-3">
				<Card body className="bs-dim">
					<Card.Title className="row g-0 justify-content-between align-items-center">
						Education
						<BtnIcon iconType="add" />
					</Card.Title>
					<Row className="g-0 justify-content-between">
						<Col>
							<h6>
								<strong>University Name</strong>
							</h6>
							<span>Bachelor of Science</span> <br />
							<span>Computer Science & Engineering</span> <br />
							<span>
								<em>2017-2021</em>
							</span>
						</Col>
						<Col xs="auto">
							<BtnIcon iconType="edit" />
							<BtnIcon iconType="delete" className="ms-2" />
						</Col>
					</Row>
				</Card>
			</Col>
			{/* Modal */}
			<ModalEdit title="Languages" show={show} onHide={handleClose} />
		</Col>
	);
};

const ProfileP3 = () => {
	return (
		<Col xs={12} md={8} className="mt-3">
			<Col>
				<Card body className="bs-dim">
					<Card.Title className="row g-0 justify-content-between align-items-center">
						WordPress Customization
						<BtnIcon iconType="edit" />
					</Card.Title>
					<Card.Subtitle>$15.00/hr</Card.Subtitle>
					<Card.Text className="mt-3">Something text description details.</Card.Text>
				</Card>
			</Col>

			<Col className="mt-3">
				<Card body className="bs-dim">
					<Card.Title className="row g-0 justify-content-between align-items-center">
						Work History
						<BtnIcon iconType="add" />
					</Card.Title>
					<Card.Text>No Items</Card.Text>
				</Card>
			</Col>

			<Col className="mt-3">
				<Card body className="bs-dim">
					<Card.Title className="row g-0 justify-content-between align-items-center">
						Portfolio
						<BtnIcon iconType="add" />
					</Card.Title>
					<Row className="mt-3">
						<Col>
							<EmptyAdd description="Showcase your work to win more projects" btnName="Add items to impress clients" />
						</Col>
					</Row>
				</Card>
			</Col>

			<Col className="mt-3">
				<Card body className="bs-dim">
					<Card.Title className="row g-0 justify-content-between align-items-center">
						Skills
						<BtnIcon iconType="edit" />
					</Card.Title>
					<Card.Text as="h6">
						<Badge bg="secondary">Web Development</Badge>
					</Card.Text>
				</Card>
			</Col>
		</Col>
	);
};

const Testimonials = () => {
	return (
		<Col xs={12} className="mt-3">
			<Card body className="bs-dim">
				<Card.Title className="row g-0 justify-content-between align-items-center">
					Testimonials
					<BtnIcon iconType="add" />
				</Card.Title>
				<Row className="mt-3">
					<Col>
						<EmptyAdd description="Showcase your skill with non-Jam client testimonials" btnName="Request a testimonial" />
					</Col>
				</Row>
			</Card>
		</Col>
	);
};

const Certification = () => {
	return (
		<Col xs={12} className="mt-3">
			<Card body className="bs-dim">
				<Card.Title className="row g-0 justify-content-between align-items-center">
					Certification
					<BtnIcon iconType="add" />
				</Card.Title>
				<Row className="mt-3">
					<Col>
						<EmptyAdd description="Add certificate to highlight your best skills" btnName="Add certification" />
					</Col>
				</Row>
			</Card>
		</Col>
	);
};

const EmpHistory = () => {
	return (
		<Col xs={12} className="mt-3">
			<Card body className="bs-dim">
				<Card.Title className="row g-0 justify-content-between align-items-center">
					Employment History
					<BtnIcon iconType="add" />
				</Card.Title>
				<Row className="mt-3">
					<Col>
						<EmptyAdd description="Add employment history to showcase your past work to clients" btnName="Add employment" />
					</Col>
				</Row>
			</Card>
		</Col>
	);
};

const OtherExp = () => {
	return (
		<Col xs={12} className="mt-3">
			<Card body className="bs-dim">
				<Card.Title className="row g-0 justify-content-between align-items-center">
					Other Experiences
					<BtnIcon iconType="add" />
				</Card.Title>
				<Row className="mt-3">
					<Col>
						<EmptyAdd description="Add any other experiences that help you stand out" btnName="Add other experiences" />
					</Col>
				</Row>
			</Card>
		</Col>
	);
};

const ProfileUser = () => {
	return (
		<Container className="mt-2 mt-md-5">
			<Row>
				<ProfileP1 />
				<ProfileP2 />
				<ProfileP3 />
				<Testimonials />
				<Certification />
				<EmpHistory />
				<OtherExp />
			</Row>
		</Container>
	);
};

export default ProfileUser;
