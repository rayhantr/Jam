import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
import { Button } from "@material-ui/core";

const ModalForm = (props) => {
	const { title, children, onHide, action, ...other } = props;
	return (
		<Modal centered scrollable {...other} onHide={onHide}>
			<Modal.Header closeButton className="px-4">
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body className="p-4">{children}</Modal.Body>
			<Modal.Footer className="px-4 pb-4">
				<Button className="me-3" color="secondary" disableElevation onClick={onHide}>
					Cancel
				</Button>
				<Button variant="contained" color="secondary" disableElevation>
					{action}
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

ModalForm.defaultProps = {
	title: "Form",
	action: "Edit",
};

ModalForm.propTypes = {
	title: PropTypes.string,
	action: PropTypes.string,
};

export default ModalForm;
