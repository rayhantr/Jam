import { Button } from "@material-ui/core";
import TableLanguages from "components/Admin/Tables/TableLanguages";
import ConfirmDelete from "components/Modal/ConfirmDelete";
import ModalForm from "components/Modal/ModalForm";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Languages = () => {
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
			<Form.Group as={Row} controlId="selectLanguage">
				<Form.Label column md={4} lg={3} className="text-md-end">
					Select Language
				</Form.Label>
				<Col md={8}>
					<Form.Select aria-label="Select Language" className="py-2 px-3">
						<option value="superAdmin">English - en</option>
					</Form.Select>
				</Col>
			</Form.Group>
		</Form>
	);

	return (
		<>
			<section className="section">
				<div className="section-header">
					<h1 className="me-3">Languages</h1>
					<Button variant="contained" color="primary" disableElevation onClick={addHandleShow}>
						Add New
					</Button>
					<div className="section-header-breadcrumb">
						<div className="breadcrumb-item active">
							<Link to="#">Admin</Link>
						</div>
						<div className="breadcrumb-item">Languages</div>
					</div>
				</div>
			</section>
			<Row>
				<Col xs={12}>
					<TableLanguages editModal={editHandleShow} deleteModal={deleteHandleShow} />
				</Col>
			</Row>
			{/* Modal */}
			<ModalForm show={modalProps.addOpen} onHide={handleClose} action="Add" size="lg" title="Add New Language">
				{renderFormFields}
			</ModalForm>
			<ModalForm show={modalProps.editOpen} onHide={handleClose} action="Update" size="lg" title="Edit Language">
				{renderFormFields}
			</ModalForm>
			<ConfirmDelete show={modalProps.deleteOpen} onHide={handleClose} />
		</>
	);
};

export default Languages;
