import React from "react";
import PropTypes from "prop-types";
import { Modal, Form } from "react-bootstrap";
import { Button } from "@material-ui/core";

const ModalForm = (props) => {
	return (
		<Modal {...props} centered>
			<Form>
				<Modal.Header closeButton>
					<Modal.Title>{props.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>{props.children}</Modal.Body>
				<Modal.Footer className="px-3 pb-3">
					<Button className="me-3" color="secondary" disableElevation onClick={props.onHide}>
						Cancel
					</Button>
					<Button variant="contained" color="secondary" disableElevation>
						{props.action}
					</Button>
				</Modal.Footer>
			</Form>
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
