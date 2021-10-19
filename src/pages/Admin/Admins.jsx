import { Button } from "@material-ui/core";
import TableAdmins from "components/Admin/Tables/TableAdmins";
import ModalForm from "components/Modal/ModalForm";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Admins = () => {
	const [modalProps, setModalProps] = useState({ addOpen: false });

	const handleClose = () => setModalProps({ addOpen: false });
	const addHandleShow = () => {
		setModalProps({ addOpen: true });
	};

	// modal field forms
	const renderFormFields = (
		<Form>
			<Form.Group as={Row} className="mb-3" controlId="name">
				<Form.Label column md={4} lg={3} className="text-md-end">
					Name
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="Name" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="email">
				<Form.Label column md={4} lg={3} className="text-md-end">
					Email
				</Form.Label>
				<Col md={8}>
					<Form.Control type="email" placeholder="Email" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="password">
				<Form.Label column md={4} lg={3} className="text-md-end">
					Password
				</Form.Label>
				<Col md={8}>
					<Form.Control type="password" placeholder="Password" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="confirmPassword">
				<Form.Label column md={4} lg={3} className="text-md-end">
					Confirm Password
				</Form.Label>
				<Col md={8}>
					<Form.Control type="password" placeholder="Confirm Password" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} controlId="assignRoles">
				<Form.Label column md={4} lg={3} className="text-md-end">
					Assign Roles
				</Form.Label>
				<Col md={8}>
					<Form.Select aria-label="Assign Roles" className="py-2 px-3">
						<option value="superAdmin">Super Admin</option>
					</Form.Select>
				</Col>
			</Form.Group>
		</Form>
	);

	return (
		<>
			<section className="section">
				<div className="section-header">
					<h1 className="me-3">Admins</h1>
					<Button variant="contained" color="primary" disableElevation onClick={addHandleShow}>
						Add New
					</Button>
					<div className="section-header-breadcrumb">
						<div className="breadcrumb-item active">
							<Link to="#">Admin</Link>
						</div>
						<div className="breadcrumb-item">Admins</div>
					</div>
				</div>
			</section>
			<Row>
				<Col xs={12}>
					<TableAdmins />
				</Col>
			</Row>
			{/* Modal */}
			<ModalForm show={modalProps.addOpen} onHide={handleClose} action="Add" size="lg" title="Add New Admin">
				{renderFormFields}
			</ModalForm>
		</>
	);
};

export default Admins;
