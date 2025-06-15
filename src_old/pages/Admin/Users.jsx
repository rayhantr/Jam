import { Button } from "@material-ui/core";
import TableUsers from "components/Admin/Tables/TableUsers";
import ConfirmDelete from "components/Modal/ConfirmDelete";
import ModalForm from "components/Modal/ModalForm";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Users = () => {
	const [modalProps, setModalProps] = useState({ addOpen: false, editOpen: false, deleteOpen: false, planOpen: false });

	const handleClose = () => setModalProps({ addOpen: false, editOpen: false, deleteOpen: false, planOpen: false });
	const addHandleShow = () => {
		setModalProps({ addOpen: true });
	};
	const editHandleShow = () => {
		setModalProps({ editOpen: true });
	};
	const deleteHandleShow = () => {
		setModalProps({ deleteOpen: true });
	};
	const planHandleShow = () => {
		setModalProps({ planOpen: true });
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
			<Form.Group as={Row} controlId="status">
				<Form.Label column md={4} lg={3} className="text-md-end">
					Status
				</Form.Label>
				<Col md={8}>
					<Form.Select aria-label="Status" className="py-2 px-3">
						<option value="active">Active</option>
						<option value="inactive">Inactive</option>
					</Form.Select>
				</Col>
			</Form.Group>
		</Form>
	);

	const planFormFields = (
		<Form>
			<Form.Group as={Row} className="mb-3" controlId="planName">
				<Form.Label column md={4} lg={3} className="text-md-end">
					Plan Name
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="Plan Name" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="storageLimit">
				<Form.Label column md={4} lg={3} className="text-md-end">
					Storage Limit (MB)
				</Form.Label>
				<Col md={8}>
					<Form.Control type="number" placeholder="Storage Limit (MB)" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="projectLimit">
				<Form.Label column md={4} lg={3} className="text-md-end">
					Project Limit
				</Form.Label>
				<Col md={8}>
					<Form.Control type="number" placeholder="Project Limit" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="userLimit">
				<Form.Label column md={4} lg={3} className="text-md-end">
					User Limit
				</Form.Label>
				<Col md={8}>
					<Form.Control type="number" placeholder="User Limit" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="groupLimit">
				<Form.Label column md={4} lg={3} className="text-md-end">
					Group Limit
				</Form.Label>
				<Col md={8}>
					<Form.Control type="number" placeholder="Group Limit" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="userTracking">
				<Form.Label column md={4} lg={3} className="text-md-end">
					User Tracking
				</Form.Label>
				<Col md={8}>
					<Form.Select aria-label="User Tracking" className="py-2 px-3">
						<option value="enabled">Enabled</option>
						<option value="disabled">Disabled</option>
					</Form.Select>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="mailActivity">
				<Form.Label column md={4} lg={3} className="text-md-end">
					Mail Activity
				</Form.Label>
				<Col md={8}>
					<Form.Select aria-label="Mail Activity" className="py-2 px-3">
						<option value="enabled">Enabled</option>
						<option value="disabled">Disabled</option>
					</Form.Select>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="multiAdminProject">
				<Form.Label column md={4} lg={3} className="text-md-end">
					Multi Admin Project
				</Form.Label>
				<Col md={8}>
					<Form.Select aria-label="Multi Admin Project" className="py-2 px-3">
						<option value="enabled">Enabled</option>
						<option value="disabled">Disabled</option>
					</Form.Select>
				</Col>
			</Form.Group>
			<Form.Group as={Row} controlId="screenshotCapture">
				<Form.Label column md={4} lg={3} className="text-md-end">
					Screenshot Capture
				</Form.Label>
				<Col md={8}>
					<Form.Select aria-label="Screenshot Capture" className="py-2 px-3">
						<option value="enabled">Enabled</option>
						<option value="disabled">Disabled</option>
					</Form.Select>
				</Col>
			</Form.Group>
		</Form>
	);

	return (
		<>
			<section className="section">
				<div className="section-header">
					<h1 className="me-3">Users List</h1>
					<Button variant="contained" color="primary" disableElevation onClick={addHandleShow}>
						Add User
					</Button>
					<div className="section-header-breadcrumb">
						<div className="breadcrumb-item active">
							<Link to="#">Admin</Link>
						</div>
						<div className="breadcrumb-item">Users</div>
					</div>
				</div>
			</section>
			<Row>
				<Col xs={12}>
					<TableUsers editModal={editHandleShow} deleteModal={deleteHandleShow} planModal={planHandleShow} />
				</Col>
			</Row>
			{/* Modal */}
			<ModalForm show={modalProps.addOpen} onHide={handleClose} action="Create" size="lg" title="Create New User">
				{renderFormFields}
			</ModalForm>
			<ModalForm show={modalProps.editOpen} onHide={handleClose} action="Update" size="lg" title="Update User">
				{renderFormFields}
			</ModalForm>
			<ModalForm show={modalProps.planOpen} onHide={handleClose} action="Update" size="lg" title="Update Plan">
				{planFormFields}
			</ModalForm>
			<ConfirmDelete show={modalProps.deleteOpen} onHide={handleClose} />
		</>
	);
};

export default Users;
