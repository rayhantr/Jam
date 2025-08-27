import { Button, Checkbox, FormControlLabel, makeStyles } from "@material-ui/core";
import TableRoles from "components/Admin/Tables/TableRoles";
import InfoBlock from "components/Alerts/InfoBlock";
import ModalForm from "components/Modal/ModalForm";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { permissionList } from "./rolePermissionList";

const useStyles = makeStyles({
	label: {
		fontWeight: "bold",
		textTransform: "capitalize",
	},
	formLabel: {
		textTransform: "capitalize",
	},
});

const Roles = () => {
	const classes = useStyles();
	const [modalProps, setModalProps] = useState({ addOpen: false });

	const handleClose = () => setModalProps({ addOpen: false });
	const addHandleShow = () => {
		setModalProps({ addOpen: true });
	};

	// modal field forms
	const renderFormFields = (
		<Form>
			<Form.Group as={Row} className="mb-3" controlId="roleName">
				<Form.Label column md={3} className="text-md-end">
					Role name
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="Role name" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Row className="mb-3 g-3">
				<Col xs={6} md={{ span: 7, offset: 1 }}>
					<FormControlLabel control={<Checkbox name="selectAll" className="py-1 px-3" />} label="Select All" className="px-3 text-secondary" classes={{ label: classes.label }} />
				</Col>
				<Col xs={6} md={3} className="text-end">
					<Button color="primary">Clear Selection</Button>
				</Col>
				<hr className="divider my-0" />
				{permissionList.map((items, index) => {
					const { permission, subPermissions } = items;
					return (
						<Col key={index} xs={12} md={{ span: 10, offset: 1 }}>
							<InfoBlock
								title={<FormControlLabel control={<Checkbox name={permission} value={permission} className="py-1 px-3" />} label={permission} classes={{ label: classes.label }} />}
								tagType="h6"
								disableBody={!subPermissions && true}
							>
								{subPermissions && (
									<InfoBlock.Body>
										{subPermissions.map((items, index) => {
											const { permName, permValue } = items;
											return <FormControlLabel key={index} control={<Checkbox name={permValue} value={permValue} className="py-1 px-3" />} label={permName} classes={{ label: classes.formLabel }} />;
										})}
									</InfoBlock.Body>
								)}
							</InfoBlock>
						</Col>
					);
				})}
			</Row>
		</Form>
	);

	return (
		<>
			<section className="section">
				<div className="section-header">
					<h1 className="me-3">Roles</h1>
					<Button variant="contained" color="primary" disableElevation onClick={addHandleShow}>
						Add New
					</Button>
					<div className="section-header-breadcrumb">
						<div className="breadcrumb-item active">
							<Link to="#">Admin</Link>
						</div>
						<div className="breadcrumb-item">Roles</div>
					</div>
				</div>
			</section>
			<Row>
				<Col xs={12}>
					<TableRoles />
				</Col>
			</Row>
			{/* Modal */}
			<ModalForm show={modalProps.addOpen} onHide={handleClose} action="Create" size="xl" fullscreen="lg-down" title="Create New Role">
				{renderFormFields}
			</ModalForm>
		</>
	);
};

export default Roles;
