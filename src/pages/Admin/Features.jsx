import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalForm from "components/Modal/ModalForm";
import ConfirmDelete from "components/Modal/ConfirmDelete";
import TableFeatures from "components/Admin/Tables/TableFeatures";

const Features = () => {
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
		<Form as={Row} className="g-3">
			<Col sm={9}>
				<Form.Label>Title</Form.Label>
				<Form.Control type="text" placeholder="Title" className="py-2 px-3" />
			</Col>
			<Col sm={3}>
				<Form.Label htmlFor="featureColorInput">Color</Form.Label>
				<Form.Control type="color" id="featureColorInput" defaultValue="#eee" title="Choose a color" className="mw-100" />
			</Col>
			<Col xs={12}>
				<Form.Label>Icon</Form.Label>
				<Form.Control type="file" className="py-2 px-3" />
			</Col>
			<Col xs={12}>
				<Form.Label>Short Description</Form.Label>
				<Form.Control as="textarea" rows={5} placeholder="Short Description" className="py-2 px-3" />
			</Col>
			<Col xs={12}>
				<Form.Label>Page Content</Form.Label>
				<Form.Control as="textarea" rows={5} placeholder="Page Content" className="py-2 px-3" />
			</Col>
			<Col xs={12}>
				<Form.Label>Status</Form.Label>
				<Form.Select aria-label="Status" className="py-2 px-3">
					<option value="active">Active</option>
					<option value="inactive">Inactive</option>
				</Form.Select>
			</Col>
		</Form>
	);

	// Rendered content
	return (
		<>
			<section className="section">
				<div className="section-header">
					<h1 className="me-3">Features List</h1>
					<Button variant="contained" color="primary" disableElevation onClick={addHandleShow}>
						Add New
					</Button>
					<div className="section-header-breadcrumb">
						<div className="breadcrumb-item active">
							<Link to="#">Admin</Link>
						</div>
						<div className="breadcrumb-item">Feature</div>
					</div>
				</div>
			</section>
			<Row>
				<Col xs={12}>
					<div className="card">
						<div className="card-body d-grid">
							<TableFeatures onClick={editHandleShow} onDeleteClick={deleteHandleShow} />
						</div>
					</div>
				</Col>
			</Row>
			{/* Modal */}
			<ModalForm show={modalProps.addOpen} onHide={handleClose} action="Add" size="xl" title="Create Feature">
				{renderFormFields}
			</ModalForm>
			<ModalForm show={modalProps.editOpen} onHide={handleClose} action="Edit" size="xl" title="Edit Feature">
				{renderFormFields}
			</ModalForm>
			<ConfirmDelete show={modalProps.deleteOpen} onHide={handleClose} />
		</>
	);
};

export default Features;
