import React, { useState } from "react";
import { Button, FormControlLabel, makeStyles, Radio, RadioGroup, Switch } from "@material-ui/core";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalForm from "components/Modal/ModalForm";
import TblProjects from "components/User/Tables/TblProjects";

const useStyles = makeStyles({
	label: {
		fontWeight: 600,
		textTransform: "capitalize",
	},
});

const Projects = () => {
	const classes = useStyles();
	const [modalProps, setModalProps] = useState({ addOpen: false });

	const handleClose = () => setModalProps({ addOpen: false });
	const addHandleShow = () => {
		setModalProps({ addOpen: true });
	};

	const [value, setValue] = useState("onlyMe");

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	// modal field forms
	const renderFormFields = (
		<Form>
			<Form.Group as={Row} className="mb-3" controlId="projectName">
				<Form.Label column md={3} className="text-md-end">
					Enter Project Name
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="Project Name" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="description">
				<Form.Label column md={3} className="text-md-end">
					Project Description
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="Project Description" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Form.Group as={Row} className="mb-3" controlId="timeline">
				<Form.Label column md={3} className="text-md-end">
					Timeline
				</Form.Label>
				<Col md={8}>
					<Form.Control type="text" placeholder="Timeline" className="py-2 px-3" />
				</Col>
			</Form.Group>
			<Row className="mb-3">
				<Col md={3} className="text-md-end p-input">
					Project Type
				</Col>
				<Col md={8}>
					<RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
						<FormControlLabel value="onlyMe" control={<Radio />} label="Only Me" classes={{ label: classes.label }} />
						<Form.Text className="mt-0 mb-3" muted>
							Only you can see this project
						</Form.Text>
						<FormControlLabel value="team" control={<Radio />} label="Team Members" classes={{ label: classes.label }} />
						<Form.Text className="mt-0 mb-3" muted>
							Only assigned team members can see this project
						</Form.Text>
						<FormControlLabel value="group" control={<Radio />} label="Group" classes={{ label: classes.label }} />
						<Form.Text className="mt-0 mb-3" muted>
							Only assigned group members can see this project
						</Form.Text>
					</RadioGroup>
				</Col>
			</Row>
			<Row>
				<Col md={3} className="text-md-end p-input">
					User Track
				</Col>
				<Col md={8}>
					<Form.Group as={Row} className="g-3">
						<Col md={8}>
							<FormControlLabel control={<Switch />} label="Capture Screenshot" classes={{ label: classes.label }} />
						</Col>
						<Col md={8}>
							<FormControlLabel control={<Switch />} label="User Location (GPS)" classes={{ label: classes.label }} />
						</Col>
						<Col md={8}>
							<FormControlLabel control={<Switch />} label="Mail Activity" classes={{ label: classes.label }} />
						</Col>
					</Form.Group>
				</Col>
			</Row>
		</Form>
	);

	// Rendered content
	return (
		<>
			<section className="section">
				<div className="section-header">
					<h1 className="me-3">Project</h1>
					<Button variant="contained" color="primary" disableElevation onClick={addHandleShow}>
						Create New
					</Button>
					<div className="section-header-breadcrumb">
						<div className="breadcrumb-item active">
							<Link to="#">Admin</Link>
						</div>
						<div className="breadcrumb-item">Project</div>
					</div>
				</div>
			</section>
			<Row>
				<Col xs={12}>
					<TblProjects />
				</Col>
			</Row>
			{/* Modal */}
			<ModalForm show={modalProps.addOpen} onHide={handleClose} action="Create" size="xl" fullscreen="lg-down" title="Create New Project">
				{renderFormFields}
			</ModalForm>
		</>
	);
};

export default Projects;
