import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "@material-ui/core";

const ConfirmDelete = (props) => {
	const { onHide, ...other } = props;
	return (
		<Modal centered scrollable {...other} onHide={onHide}>
			<Modal.Body className="p-4 pb-3 text-center">
				<div className="fs-large text-danger">
					<i className="fas fa-exclamation-triangle"></i>
				</div>
				<h1>Are you sure?</h1>
				<h5>You want to delete this plan!</h5>
			</Modal.Body>
			<Modal.Footer className="px-4 pb-4 justify-content-center">
				<Button className="me-3" variant="contained" color="secondary" disableElevation>
					Yes
				</Button>
				<Button className="bg-danger text-white" variant="contained" disableElevation onClick={onHide}>
					Cancel
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ConfirmDelete;
