import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalForm from "components/Modal/ModalForm";
import ConfirmDelete from "components/Modal/ConfirmDelete";
import TablePages from "components/Admin/Tables/TablePages";

const Pages = () => {
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
			<Form.Group as={Row} className="mb-3" controlId="pageTitle">
				<Form.Label column md={3} className="text-md-end">
					Page Title
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="Page Title" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="pageExcerpt">
				<Form.Label column md={3} className="text-md-end">
					Page Excerpt
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="Page Excerpt" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="pageContent">
				<Form.Label column md={3} className="text-md-end">
					Page Content
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="Page Content" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} controlId="planName">
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
		</Form>
	);

	// Rendered content
	return (
		<>
			<section className="section">
				<div className="section-header">
					<h1 className="me-3">Page List</h1>
					<Button variant="contained" color="primary" disableElevation onClick={addHandleShow}>
						Add New
					</Button>
					<div className="section-header-breadcrumb">
						<div className="breadcrumb-item active">
							<Link to="#">Admin</Link>
						</div>
						<div className="breadcrumb-item">Pages</div>
					</div>
				</div>
			</section>
			<Row>
				<Col xs={12}>
					<div className="card">
						<div className="card-header">
							<h4>Pages</h4>
						</div>
						<div className="card-body pt-0 d-grid">
							<TablePages onClick={editHandleShow} onDeleteClick={deleteHandleShow} />
						</div>
					</div>
				</Col>
			</Row>
			{/* Modal */}
			<ModalForm show={modalProps.addOpen} onHide={handleClose} action="Add" size="xl" fullscreen="lg-down" title="Create New Page">
				{renderFormFields}
			</ModalForm>
			<ModalForm show={modalProps.editOpen} onHide={handleClose} action="Edit" size="xl" fullscreen="lg-down" title="Edit Page">
				{renderFormFields}
			</ModalForm>
			<ConfirmDelete show={modalProps.deleteOpen} onHide={handleClose} />
		</>
	);
};

export default Pages;
