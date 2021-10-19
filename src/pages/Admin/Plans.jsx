import React, { useState } from "react";
import { Button } from "@material-ui/core";
import TablePlans from "components/Admin/Tables/TablePlans";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalForm from "components/Modal/ModalForm";
import ConfirmDelete from "components/Modal/ConfirmDelete";

const Plans = () => {
	const [modalProps, setModalProps] = useState({ addOpen: false, editOpen: false, deleteOpen: false });

	const handleClose = () => setModalProps({ addOpen: false, editOpen: false, deleteOpen: false });
	const addHandleShow = () => {
		setModalProps({ addOpen: true });
	};
	const editHandleShow = () => {
		setModalProps({ editOpen: true });
	};
	const deleteHandleShow = () => {
		setModalProps({ deleteOpen: true });
	};

	// modal field forms
	const renderFormFields = (
		<Form>
			<Form.Group as={Row} className="mb-3" controlId="planName">
				<Form.Label column md={3} className="text-md-end">
					Plan Name
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="Name" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="duration">
				<Form.Label column md={3} className="text-md-end">
					Duration
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="Duration" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="price">
				<Form.Label column md={3} className="text-md-end">
					Price
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="Price" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="storageLimit">
				<Form.Label column md={3} className="text-md-end">
					Storage Limit
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="Storage Limit" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="usersLimit">
				<Form.Label column md={3} className="text-md-end">
					Users Limit
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="Users Limit" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="projectLimit">
				<Form.Label column md={3} className="text-md-end">
					Project Limit
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="Project Limit" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="groupLimit">
				<Form.Label column md={3} className="text-md-end">
					Group Limit
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="Group Limit" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="planName">
				<Form.Label column md={3} className="text-md-end">
					Screen Shot
				</Form.Label>
				<Col md={8}>
					<Form.Select aria-label="Screen Shot" className="py-2 px-3">
						<option value="active">Active</option>
						<option value="inactive">Inactive</option>
					</Form.Select>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="planName">
				<Form.Label column md={3} className="text-md-end">
					GPS Tracking
				</Form.Label>
				<Col md={8}>
					<Form.Select aria-label="GPS Tracking" className="py-2 px-3">
						<option value="on">On</option>
						<option value="off">Off</option>
					</Form.Select>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="planName">
				<Form.Label column md={3} className="text-md-end">
					Is Featured
				</Form.Label>
				<Col md={8}>
					<Form.Select aria-label="Is Featured" className="py-2 px-3">
						<option value="active">Active</option>
						<option value="inactive">Inactive</option>
					</Form.Select>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="planName">
				<Form.Label column md={3} className="text-md-end">
					Is Trial
				</Form.Label>
				<Col md={8}>
					<Form.Select aria-label="Is Trial" className="py-2 px-3">
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</Form.Select>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="planName">
				<Form.Label column md={3} className="text-md-end">
					Admin Allowed Project
				</Form.Label>
				<Col md={8}>
					<Form.Select aria-label="Admin Allowed Project" className="py-2 px-3">
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</Form.Select>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="planName">
				<Form.Label column md={3} className="text-md-end">
					Mail Activity
				</Form.Label>
				<Col md={8}>
					<Form.Select aria-label="Mail Activity" className="py-2 px-3">
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</Form.Select>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="planName">
				<Form.Label column md={3} className="text-md-end">
					Status
				</Form.Label>
				<Col md={8}>
					<Form.Select aria-label="Status" className="py-2 px-3">
						<option value="active">Active</option>
						<option value="inactive">Inactive</option>
					</Form.Select>
				</Col>
			</Form.Group>
			<Form.Group as={Row} controlId="planName">
				<Form.Label column md={3} className="text-md-end">
					Is Default?
				</Form.Label>
				<Col md={8}>
					<Form.Select aria-label="Is Default?" className="py-2 px-3">
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</Form.Select>
				</Col>
			</Form.Group>
		</Form>
	);

	// Rendered content
	return (
		<>
			<section className="section">
				<div className="section-header">
					<h1 className="me-3">Plan</h1>
					<Button variant="contained" color="primary" disableElevation onClick={addHandleShow}>
						Add Plan
					</Button>
					<div className="section-header-breadcrumb">
						<div className="breadcrumb-item active">
							<Link to="#">Admin</Link>
						</div>
						<div className="breadcrumb-item">Plan</div>
					</div>
				</div>
			</section>
			<Row>
				<Col xs={12}>
					<div className="card">
						<div className="card-header">
							<h4>All Plans</h4>
						</div>
						<div className="card-body pt-0 d-grid">
							<TablePlans onClick={editHandleShow} onDeleteClick={deleteHandleShow} />
						</div>
					</div>
				</Col>
			</Row>
			{/* Modal */}
			<ModalForm show={modalProps.addOpen} onHide={handleClose} action="Add" size="xl" fullscreen="lg-down" title="Create Plan">
				{renderFormFields}
			</ModalForm>
			<ModalForm show={modalProps.editOpen} onHide={handleClose} action="Edit" size="xl" fullscreen="lg-down" title="Edit Plan">
				{renderFormFields}
			</ModalForm>
			<ConfirmDelete show={modalProps.deleteOpen} onHide={handleClose} />
		</>
	);
};

export default Plans;
